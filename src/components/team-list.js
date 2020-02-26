import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

function TeamList(props) {
  const [teamList, setList] = props.handleForm;
  return (
    <div className="team-list">
      <ListGroup>
        {Object.values(teamList).map(m => (
          <Link to={`/team/${m.github}`}>
            <ListGroupItem key={m.github}>
              {m.name} <span>{m.github}</span>
            </ListGroupItem>
          </Link>
        ))}
      </ListGroup>
    </div>
  );
}

export default TeamList;
