import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class MedicalCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // date: '',
      medicalConditions: '',
      previousSurgeries: '',
      previousHospitalizations: '',
      currentMedications: '',
      allergies: '',
      height: '',
      weight: '',
      other: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:3000/medical/create', {
      method: "POST",
      body: JSON.stringify({medical: this.state }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token,
      }),
    })
      .then((res) => res.json())
      .then((logData) => {
          console.log(logData);
        this.setState({
          // date: '',
          medicalConditions: '',
          previousSurgeries: '',
          previousHospitalizations: '',
          currentMedications: '',
          allergies: '',
          height: '',
          weight: '',
          other: ''
          }
        );
        this.props.updateMedicalArray()
      });
  };

  render() {
    return (
      <div>
        <h3>Medical Health Log</h3>
        <p> Track your important medical information. When you need it, it'll be easy to find all in one place! </p>
        <hr />
        <Form onSubmit={this.handleSubmit}>
        {/* <FormGroup>
            <Label for="date">Date</Label>
            <Input
              id="date"
              type="text"
              name="date"
              value={this.state.date}
              placeholder="Enter here"
              onChange={this.handleChange}
            />
             </FormGroup> */}
          <FormGroup>
            <Label for="medicalConditions">Medical Conditions</Label>
            <Input
              id="medicalConditions"
              type="text"
              name="medicalConditions"
              value={this.state.medicalConditions}
              placeholder="Enter here"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="previousSurgeries">Previous Surgeries</Label>
            <Input
              id="previousSurgeries"
              type="text"
              name="previousSurgeries"
              value={this.state.previousSurgeries}
              placeholder="Enter here"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="previousHospitalizations">Previous Hospitalizations</Label>
            <Input
              id="previousHospitalizations"
              type="text"
              name="previousHospitalizations"
              value={this.state.previousHospitalizations}
              placeholder="Enter here"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="currentMedications">Current Medications</Label>
            <Input
              id="currentMedications"
              type="text"
              name="currentMedications"
              value={this.state.currentMedications}
              placeholder="Enter here"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="allergies">Allergies</Label>
            <Input
              id="allergies"
              type="text"
              name="allergies"
              value={this.state.allergies}
              placeholder="Enter here"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="height">Height</Label>
            <Input
              id="height"
              type="text"
              name="height"
              value={this.state.height}
              placeholder="Enter here"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="weight">Weight</Label>
            <Input
              id="weight"
              type="text"
              name="weight"
              value={this.state.weight}
              placeholder="Enter here"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="other">Notes</Label>
            <Input
              id="other"
              type="text"
              name="other"
              value={this.state.other}
              placeholder="Enter other information"
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button type="post" color="primary">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default MedicalCreate;
