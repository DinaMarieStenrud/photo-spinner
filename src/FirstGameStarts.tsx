import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Wheel from "./components/Wheel";
import camera from "./icons/camera.png";
import "./StartPage.css";

const FirstGameStarts: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const players = (location.state as { players?: string[] } | undefined)?.players ?? [];

  useEffect(() => {
    if (!players.length) navigate("/");
  }, [players, navigate]);

  if (!players.length) {
    return <div style={{ padding: 24, fontFamily: "Inter" }}>Sender deg tilbake…</div>;
  }

  return (
    <div id="fullsizeDiv">
      <div id="div2">
        <h1 style={{color: "white"}}>Spillet starter!</h1>
        <div className="wheelCenter">
          <Wheel participants={players} />
          <img src={camera} alt="Kamera" id="camera" />
        </div>
      </div>
    </div>
  );
};

export default FirstGameStarts;
