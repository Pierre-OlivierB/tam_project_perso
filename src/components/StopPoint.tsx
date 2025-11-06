// src/components/StopPoint.tsx
import { FC, memo } from "react";
import { StopDisplayData } from "../types.js";

interface StopPointProps {
  stop: StopDisplayData;
  lineColor: string;
}

const StopPoint: FC<StopPointProps> = memo(({ stop, lineColor }) => {
  const { etas, hasRealTimeData } = stop;

  // 3 next times
  const nextEtas = etas && etas.length > 0 ? etas.slice(0, 3) : [];

  return (
    <div className="stop-point text-center p-2" style={{ minWidth: "80px" }}>
      {/* Stop Name */}
      <div className="name mb-1 small text-wrap" title={stop.name}>
        {stop.name}
      </div>

      {/* Point */}
      <div
        className="tram-dot mx-auto border border-2 rounded-circle"
        style={{
          width: "12px",
          height: "12px",
          backgroundColor: lineColor,
          opacity: hasRealTimeData ? 1 : 0.4,
          zIndex: 1,
        }}
      ></div>

      {/* 3 next times */}
      {nextEtas.length > 0 ? (
        <div className="eta-list mt-1 small d-flex flex-column gap-1">
          {nextEtas.map((eta, index) => (
            <div
              key={index}
              className="fw-bold text-success"
              style={{
                backgroundColor: "rgba(25, 135, 84, 0.1)",
                borderRadius: "8px",
                padding: "2px 6px",
                display: "inline-block",
                margin: "0 auto",
              }}
            >
              {eta.etaInMinutes === 0 ? "0 min" : `${eta.etaInMinutes} min`}
            </div>
          ))}
        </div>
      ) : (
        <div className="eta mt-1 small text-muted">N/D</div>
      )}
    </div>
  );
});

export default StopPoint;
