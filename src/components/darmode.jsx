import { useState } from "react";
const Darkmode = () => {
  const [isNightMode, setIsNightMode] = useState(false);
  const toggleMode = () => {
    setIsNightMode((prevMode) => !prevMode);
  };
  const containerStyle = {
    background: isNightMode ? "#000" : "#fff",
    color: isNightMode ? "#fff" : "#000",
  };
  return (
    <div style={containerStyle}>
      <h1>{isNightMode ? "Nachtmodus" : "Tagmodus"}</h1>
      <button onClick={toggleMode}>
        {isNightMode ? "Tagmodus aktivieren" : "Nachtmodus aktivieren"}
      </button>
    </div>
  );
};

export default Darkmode;
