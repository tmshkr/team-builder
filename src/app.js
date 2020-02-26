import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link,
  Switch
} from "react-router-dom";
import TeamForm from "./components/team-form";

import TeamList from "./components/team-list";
// import "./app.scss";

function App() {
  const [teamList, setList] = useState({});

  return (
    <Router>
      <div id="app">
        <header className="top">
          <Link to="/">
            <h1>TeamBuilder</h1>
          </Link>
        </header>
        <main>
          <Switch>
            <Route path="/signup">
              <TeamForm handleForm={[teamList, setList]} />
            </Route>
            <Route>
              <TeamList />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
