import { useState, useEffect, useRef } from 'react';
import { RealTimeUpdates, LineId } from '../types.js';
import { ALL_LINES } from '../data/staticLines.js';
import GtfsRealtimeBindings from 'gtfs-realtime-bindings';

const GTFS_RT_BINARY_URL = '/api/tram/TripUpdate.pb';
const POLLING_DELAY = 60000;
const FeedMessage = GtfsRealtimeBindings.transit_realtime.FeedMessage;

// ------------------------------------------------------
// Function catch et decode GTFS data
// ------------------------------------------------------
async function fetchAndDecodeRealTimeData(lineId: LineId): Promise<RealTimeUpdates> {
  const updates: RealTimeUpdates = {};

  try {
    const response = await fetch(GTFS_RT_BINARY_URL);
    if (!response.ok) throw new Error(`Erreur HTTP: ${response.status}`);

    const buffer = await response.arrayBuffer();

    // data catch
    const feed = FeedMessage.decode(new Uint8Array(buffer));

    const nowInSeconds = Number(feed.header.timestamp);

    // 🔹 selected line data with dropdawn
    const selectedLineData = ALL_LINES.find(line => line.id === lineId);
    if (!selectedLineData) throw new Error(`Ligne non trouvée : ${lineId}`);

    // 🔹 compare targets
    const routeIdsToMatch = selectedLineData.routeIds?.length
      ? selectedLineData.routeIds
      : [lineId.replace('L', '')];

    const validStopIds = new Set<string>(
      selectedLineData.stops.flatMap(stop => stop.stopId.filter(id => id))
    );
    // ------------------------------------------------------
    // BEGIN Data Logic
    // ------------------------------------------------------
    feed.entity.forEach((entity: any) => {
      const routeId = entity.tripUpdate?.trip?.routeId;

      if (!routeId || !routeIdsToMatch.includes(routeId)) return;

      entity.tripUpdate.stopTimeUpdate.forEach((stopUpdate: any) => {
        const stopId = stopUpdate.stopId;
        if (!validStopIds.has(stopId)) return;

        const estimatedDepartureTimeSeconds = Number(stopUpdate.departure?.time);

        const estimatedArrivalTimeSeconds = Number(stopUpdate.arrival?.time);

        const finalEventTimeSeconds = estimatedDepartureTimeSeconds || estimatedArrivalTimeSeconds;

        if (!finalEventTimeSeconds || finalEventTimeSeconds <= 0) return;

        const realDepartureTime = finalEventTimeSeconds;

        const timeDifferenceSeconds = realDepartureTime - nowInSeconds;

        if (timeDifferenceSeconds <= 0) return;

        const etaInMinutes = Math.floor(timeDifferenceSeconds / 60);

        if (!updates[stopId]) updates[stopId] = [];
        updates[stopId].push({
          etaInMinutes,
          timestamp: realDepartureTime,
        });
      });
    });
    // ------------------------------------------------------
    // END Data Logic
    // ------------------------------------------------------

    Object.keys(updates).forEach(stopId => {
      updates[stopId].sort((a, b) => a.etaInMinutes - b.etaInMinutes);
      updates[stopId] = updates[stopId].slice(0, 3);
    });
    return updates;
  } catch (error) {
    console.error("Erreur dans fetchAndDecodeRealTimeData :", error);
    throw error;
  }
}

// ------------------------------------------------------
// Hook principal
// ------------------------------------------------------
export function useTramPolling(selectedLine: LineId | null) {
  const [data, setData] = useState<RealTimeUpdates>({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const savedCallback = useRef(async () => { });

  useEffect(() => {
    setData({});
    setError(null);

    savedCallback.current = async () => {
      if (!selectedLine) return;
      setIsLoading(true);
      try {
        const updates = await fetchAndDecodeRealTimeData(selectedLine);
        setData(updates);
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Une erreur inconnue est survenue.');
      } finally {
        setIsLoading(false);
      }
    };

    if (selectedLine) {
      savedCallback.current();
      const intervalId = setInterval(savedCallback.current, POLLING_DELAY);
      return () => clearInterval(intervalId);
    }

  }, [selectedLine]);

  return { data, isLoading, error };
}
