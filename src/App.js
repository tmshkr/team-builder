import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import TeamForm from "./components/team-form";
import TeamList from "./components/team-list";
// import "./app.scss";

function App() {
  const [teamList, setList] = useState({});

  return (
    <div id="app">
      <header className="top">
        <h1>TeamBuilder</h1>
      </header>
      <main>
        <Router>
          <Switch>
            <Route path="/signup">
              <TeamForm handleForm={[teamList, setList]} />
            </Route>
            <Route>
              <TeamList />
            </Route>
          </Switch>
        </Router>
      </main>
    </div>
  );
}

export default App;
