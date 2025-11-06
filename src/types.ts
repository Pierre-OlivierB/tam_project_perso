// types.ts
export type LineId = 'L1' | 'L2' | 'L3' | 'L4';

export interface TramETA {
  etaInMinutes: number;
  timestamp: number;
}

export interface StaticStop {
  stopId: string[];
  name: string;
  order: number;
}



export interface StopDisplayData {
  stopId: string;
  name: string;
  order: number;
  etas: TramETA[];
  hasRealTimeData: boolean;
}

export interface LineData {
  id: string;
  name: string;
  color: string;
  stops: StaticStop[];
  routeIds?: string[];
}

export type RealTimeUpdates = Record<string, TramETA[]>;
