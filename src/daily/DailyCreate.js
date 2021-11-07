import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class DailyCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
        id: '',
        food: "",
        water: 0,
        sleep: 0,
        mood: "",
        stressLevel: 0,
        exercise: "",
        painLevel: 0,
        other: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("dailycreate");
    fetch('http://localhost:3000/daily/create', {
      method: "POST",
      body: JSON.stringify({daily: this.state }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token,
      }),
    })
      .then((res) => res.json())
      .then((logData) => {
          console.log(logData);
        // this.props.updateDailyArray();
        this.setState({
                id: '',
              food: "",
              water: 0,
              sleep: 0,
              mood: "",
              stressLevel: 0,
              exercise: "",
              painLevel: 0,
              other: "",
            
          }
        );
      });
  };

  render() {
    return (
      <div>
        <h3>Daily Health Log</h3>
        <hr />
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="food">Food</Label>
            <Input
              id="food"
              type="text"
              name="food"
              value={this.state.food}
              placeholder="Enter here"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="water">Water</Label>
            <Input
              id="water"
              type="text"
              name="water"
              value={this.state.water}
              placeholder="Enter here in oz"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="sleep">Sleep</Label>
            <Input
              id="sleep"
              type="text"
              name="sleep"
              value={this.state.sleep}
              placeholder="Enter here in hrs"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="mood">Mood</Label>
            <Input
              type="select"
              name="mood"
              id="mood"
              onChange={this.handleChange}
              placeholder="Select your mood"
            >
              <option></option>
              <option value="Happy">Happy</option>
              <option value="Anxious">Anxious</option>
              <option value="Irritated">Irritated</option>
              <option value="Sad">Sad</option>
              <option value="Calm">Calm</option>
              <option value="Tired">Tired</option>
              <option value="Numb">Numb</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="stress level">Stress Level</Label>
            <Input
              type="select"
              name="stress level"
              id="stress level"
              onChange={this.handleChange}
              placeholder="Select your stress level"
            >
              <option></option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exercise">Exercise</Label>
            <Input
              id="exercise"
              type="text"
              name="exercise"
              value={this.state.exercise}
              placeholder="Enter exercise"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="pain level">Pain Level</Label>
            <Input
              type="select"
              name="pain level"
              id="pain level"
              onChange={this.handleChange}
              placeholder="Select your pain level"
            >
              <option></option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Input>
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

export default DailyCreate;
