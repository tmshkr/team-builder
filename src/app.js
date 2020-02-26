import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link,
  Switch
} from "react-router-dom";

import initialData from "./data";
import SignupForm from "./components/signup-form";
import TeamList from "./components/team-list";
// import "./app.scss";

function App() {
  const [teamList, setList] = useState(initialData);
  console.log(teamList);

  return (
    <Router>
      <div id="app">
        <header className="top">
          <Link to="/">
            <h1>TeamBuilder</h1>
          </Link>
          <nav>
            <Link to="/list">List</Link>
            <Link to="/signup">Signup</Link>
          </nav>
        </header>
        <main>
          <Switch>
            <Route path="/signup">
              <SignupForm handleForm={[teamList, setList]} />
            </Route>
            <Route path={("/team/:member/edit", "/team/:member")}>
              <SignupForm handleForm={[teamList, setList]} />
            </Route>
            <Route>
              <TeamList handleForm={[teamList, setList]} />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
