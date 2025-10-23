import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StartPage.css";

const StartPage: React.FC = () => {
  const [players, setPlayers] = useState<string[]>([""]);
  const navigate = useNavigate();

  const addInput = () => setPlayers((p) => [...p, ""]);
  const handleChange = (i: number, v: string) =>
    setPlayers((p) => p.map((x, idx) => (idx === i ? v : x)));

  const cleaned = players.map(s => s.trim()).filter(Boolean);
  const canStart = cleaned.length > 0;

  const startGame = () => {
    if (!canStart) return;
    navigate("/fg/firstgamestarts", { state: { players: cleaned } });
  };

  return (
    <div id="contain">
      <h1 id="game1">Her er game 1</h1>
      <h2>Skriv inn navnet på deltakerne</h2>

      <div id="player-inputs">
        {players.map((val, i) => (
          <div key={i} className="player-field">
            <label htmlFor={`player-${i}`}>Deltaker {i + 1}</label>
            <input
              id={`player-${i}`}
              type="text"
              value={val}
              onChange={(e) => handleChange(i, e.target.value)}
              placeholder="Skriv navn"
            />
          </div>
        ))}
      </div>

      <div id="button-box">
        <button id="add-button" onClick={addInput}>Legg til</button>
        <button id="play-button" disabled={!canStart} onClick={startGame}>
          Start game
        </button>
      </div>
    </div>
  );
};

export default StartPage;
