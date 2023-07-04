import React from "react";

function Catch() {
  const handleCatch = () => {
    window.print();
  };
  return (
    <button type="button" onClick={handleCatch}>
      Enregistrer
    </button>
  );
}

export default Catch;
