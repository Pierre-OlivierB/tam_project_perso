// src/App.tsx
import { useState, FC } from "react";
import { Container, Dropdown, DropdownButton, Alert } from "react-bootstrap";
import { ALL_LINES } from "./data/staticLines.js";
import { LineId } from "./types.js";
import { useTramPolling } from "./hooks/useTramPolling.js";
import VerticalTimeline from "./components/VerticalTimeline.js";
import "bootstrap/dist/css/bootstrap.min.css";

const App: FC = () => {
  // init
  const [selectedLineId, setSelectedLineId] = useState<LineId | null>("L1");

  // Hook Polling
  const {
    data: realTimeData,
    isLoading,
    error,
  } = useTramPolling(selectedLineId);

  // filter

  const selectedLineData = ALL_LINES.find((line) => line.id === selectedLineId);

  // Handler Dropdown
  const handleLineSelect = (eventKey: string | null) => {
    if (eventKey) {
      setSelectedLineId(eventKey as LineId);
    }
  };

  return (
    <Container className="p-3 df align-items-center">
      <h1 className="my-4 text-center">Tram Montpellier - Suivi en Direct</h1>

      {/* Dropdown */}
      <div className="mb-4 d-flex justify-content-center">
        <DropdownButton
          id="dropdown-line-selector"
          title={`Ligne : ${selectedLineId || "Choisir une ligne..."}`}
          onSelect={handleLineSelect}
          variant="primary"
        >
          {ALL_LINES.map((line) => (
            <Dropdown.Item key={line.id} eventKey={line.id}>
              Ligne {line.id}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </div>

      {/* Display Timeline */}
      {selectedLineData ? (
        <VerticalTimeline
          lineData={selectedLineData}
          realTimeData={realTimeData}
          isLoading={isLoading}
          error={error}
        />
      ) : (
        <Alert variant="info" className="mt-3">
          Veuillez sélectionner une ligne pour afficher la timeline.
        </Alert>
      )}

      <footer className="text-center mt-5 small text-muted">
        <p>
          Source des données GTFS : Montpellier Méditerranée Métropole (TAM).
          {isLoading
            ? " Rafraîchissement en cours..."
            : ` Dernière mise à jour : ${new Date().toLocaleTimeString()} (Rafraîchissement toutes les minutes).`}
        </p>
      </footer>
    </Container>
  );
};

export default App;
