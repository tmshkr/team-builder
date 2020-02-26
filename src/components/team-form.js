import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

function TeamForm(props) {
  const [teamList, setList] = props.handleForm;
  const [formData, setFormData] = useState({});

  const hanldeSubmit = e => {
    e.preventDefault();
    setList({ ...teamList, [formData.email]: formData });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Form className="team-form" onSubmit={hanldeSubmit}>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input
          id="name"
          type="text"
          name="name"
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
          onChange={handleChange}
          placeholder="you@example.com"
        />
      </FormGroup>
      <FormGroup>
        <Label for="select">Role</Label>
        <Input
          id="select"
          type="select"
          name="role"
          onChange={handleChange}
          defaultValue="Choose one"
        >
          <option disabled>Choose one</option>
          <option>DevOps</option>
          <option>Back-end</option>
          <option>Front-end</option>
          <option>Full-stack</option>
          <option>UX/UI</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Text Area</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>
      <FormGroup tag="fieldset">
        <legend>Radio Buttons</legend>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" /> Option one is this and that—be
            sure to include why it's great
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" /> Option two can be something
            else and selecting it will deselect option one
          </Label>
        </FormGroup>
        <FormGroup check disabled>
          <Label check>
            <Input type="radio" name="radio1" disabled /> Option three is
            disabled
          </Label>
        </FormGroup>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" /> Check me out
        </Label>
      </FormGroup>
      <Button color="primary">Submit</Button>
    </Form>
  );
}

export default TeamForm;
