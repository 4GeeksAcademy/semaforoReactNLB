import React, { useState } from "react";

const TrafficLight = () => {
  const [color, setColor] = useState("red");
  const [showPurple, setShowPurple] = useState(false);

  const colors = ["red", "yellow", "green", ...(showPurple ? ["purple"] : [])];

  const getLightClass = (c) => {
    return `light ${c} ${color === c ? "glow" : ""}`;
  };

  const handleCycle = () => {
    const currentIndex = colors.indexOf(color);
    const nextColor = colors[(currentIndex + 1) % colors.length];
    setColor(nextColor);
  };

  return (
    <div className="text-center mt-5">
      <div className="traffic-light">
        {colors.map((c) => (
          <div
            key={c}
            className={getLightClass(c)}
            onClick={() => setColor(c)}
          ></div>
        ))}
      </div>
      <div className="mt-3">
        <button className="btn btn-warning me-2" onClick={handleCycle}>
          🔁 Cambiar color
        </button>
        <button className="btn btn-secondary" onClick={() => setShowPurple(true)}>
          ➕ Añadir púrpura
        </button>
      </div>
    </div>
  );
};

export default TrafficLight;