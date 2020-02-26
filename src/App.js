import React, { useState } from "react";
import TeamForm from "./components/team-form";
// import "./app.scss";

function App() {
  const [teamList, setList] = useState({});

  return (
    <div id="app">
      <header className="top">
        <h1>TeamBuilder</h1>
      </header>
      <main>
        <TeamForm handleForm={[teamList, setList]} />
      </main>
    </div>
  );
}

export default App;
