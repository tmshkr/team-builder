import React, { useEffect, useState } from "react";
import { useHistory, useParams, Redirect } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

function SignupForm(props) {
  const [teamList, setList] = props.handleList;
  const [username, setUsername] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    github: "",
    role: "Choose one"
  });

  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    if (params.member) {
      if (teamList[params.member]) {
        setUsername(params.member);
        setFormData(teamList[params.member]);
      }
    }
  }, []);

  const hanldeSubmit = e => {
    e.preventDefault();
    // handle github username change
    if (username && username !== formData.github) {
      delete teamList[username];
    }
    setList({ ...teamList, [formData.github]: formData });
    history.push("/list");
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const { name, email, github, role } = formData;

  return (
    <>
      {params.member && !teamList[params.member] && <Redirect to="/list" />}
      <Form className="signup-form card" onSubmit={hanldeSubmit}>
        <h2>Member Details</h2>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            id="name"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Your Name"
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="you@example.com"
          />
        </FormGroup>
        <FormGroup>
          <Label for="github">GitHub handle</Label>
          <Input
            id="github"
            type="text"
            name="github"
            value={github}
            onChange={handleChange}
            placeholder="username"
          />
        </FormGroup>
        <FormGroup>
          <Label for="select">Role</Label>
          <Input
            id="select"
            type="select"
            name="role"
            value={role}
            onChange={handleChange}
          >
            <option disabled>Choose one</option>
            <option>DevOps</option>
            <option>Back-end</option>
            <option>Front-end</option>
            <option>Full-stack</option>
            <option>UX/UI</option>
          </Input>
        </FormGroup>
        <Button color="primary">Submit</Button>
      </Form>
    </>
  );
}

export default SignupForm;
