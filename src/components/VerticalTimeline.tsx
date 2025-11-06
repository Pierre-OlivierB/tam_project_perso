// src/components/VerticalTimeline.tsx
import { FC } from "react";
import StopPoint from "./StopPoint.js";
import {
  LineData,
  RealTimeUpdates,
  StopDisplayData,
  StaticStop,
} from "../types.js";
import { Alert, Spinner } from "react-bootstrap";

interface VerticalTimelineProps {
  lineData: LineData;
  realTimeData: RealTimeUpdates;
  isLoading: boolean;
  error: string | null;
}

const VerticalTimeline: FC<VerticalTimelineProps> = ({
  lineData,
  realTimeData,
  isLoading,
  error,
}) => {
  if (error) {
    return (
      <Alert variant="danger" className="mx-3 mt-3">
        Erreur de chargement : {error}
      </Alert>
    );
  }

  // Line direction
  const directions = lineData.name
    ?.match(/(.+)<->(.+)/)
    ?.slice(1, 3)
    .map((d) => d.trim()) || ["Sens 1", "Sens 2"];

  // Datas Stops
  const prepareStopData = (
    stop: StaticStop,
    stopIdIndex: number
  ): StopDisplayData => {
    const stopId = stop.stopId[stopIdIndex];
    return {
      stopId,
      name: stop.name,
      order: stop.order,
      etas: realTimeData[stopId] || [],
      hasRealTimeData: !!realTimeData[stopId]?.length,
    };
  };

  return (
    <div
      className="timeline-container mt-3 position-relative"
      style={{
        overflowY: "auto",
        padding: "1rem",
      }}
    >
      {isLoading && (
        <div className="text-center text-primary mb-3">
          <Spinner animation="border" size="sm" className="me-2" />
          Chargement des données en direct...
        </div>
      )}

      {/* === Titles === */}
      <div className="d-flex justify-content-evenly text-center fw-bold mb-3 titles-directions glass-header">
        <div className="w-50 title-direction">{directions[0]}</div>
        <div className="w-50 title-direction">{directions[1]}</div>
      </div>

      <div
        className="d-flex flex-row flex-md-row justify-content-evenly align-items-start position-relative"
        style={{ minHeight: "100%" }}
      >
        {/* === Direction 1 === */}
        <div className="timeline-column position-relative flex-fill w-50">
          {/* Line */}
          <div
            className="timeline-line position-absolute translate-middle-x"
            style={{
              width: "4px",
              backgroundColor: lineData.color,
              top: 0,
              bottom: 0,
              zIndex: 0,
              borderRadius: "2px",
            }}
          ></div>

          {/* Stops */}
          <div className="d-flex flex-column align-items-center">
            {lineData.stops.map((stop) => (
              <div key={`${stop.name}-${stop.order}-0`} className="mb-4 w-100">
                <StopPoint
                  stop={prepareStopData(stop, 0)}
                  lineColor={lineData.color}
                />
              </div>
            ))}
          </div>
        </div>

        {/* === Direction 2 === */}
        <div className="timeline-column position-relative flex-fill w-50">
          {/* Line */}
          <div
            className="timeline-line position-absolute translate-middle-x"
            style={{
              top: 0,
              bottom: 0,
              width: "4px",
              backgroundColor: lineData.color,
              borderRadius: "2px",
            }}
          ></div>

          {/* Stops */}
          <div className="d-flex flex-column align-items-center">
            {lineData.stops.map((stop) => (
              <div key={`${stop.name}-${stop.order}-1`} className="mb-4 w-100">
                <StopPoint
                  stop={prepareStopData(stop, 1)}
                  lineColor={lineData.color}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalTimeline;
