import React from "react";
import Header from "./Header";

function App() {
  const name = "Underreacted"; // Replace with the actual blog name

  return (
    <div className="App">
      <Header blogName={name} />
      {/* Other components */}
    </div>
  );
}

export default App;
