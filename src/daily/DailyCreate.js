import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class DailyCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // date: "",
        food: "",
        water: "",
        sleep: "",
        mood: "",
        stressLevel: "",
        exercise: "",
        painLevel: "",
        other: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    console.log(this.props.token, "this is coming from DailyCreate");
    event.preventDefault();
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
        this.setState({
          // date: "",
              food: "",
              water: "",
              sleep: "",
              mood: "",
              stressLevel: "",
              exercise: "",
              painLevel: "",
              other: "",
            
          }
        );
        this.props.updateDailyArray()
      });
  };

  render() {
    return (
      <div>
        <h3>Daily Health Log</h3>
        <p>Track your everyday information to help document important trends in your daily routine. </p>
        <hr />
        <Form onSubmit={this.handleSubmit}>
        {/* <FormGroup>
            <Label for="date">Date</Label>
            <Input
              id="date"
              type="date"
              name="date"
              value={this.state.date}
              placeholder="Enter date here"
              onChange={this.handleChange}
            />
          </FormGroup> */}
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
            <Label for="stressLevel">Stress Level</Label>
            <Input
              type="select"
              name="stressLevel"
              id="stressLevel"
              onChange={this.handleChange}
              placeholder="Select your stress"
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
            <Label for="painLevel">Pain Level</Label>
            <Input
              type="select"
              name="painLevel"
              id="painLevel"
              onChange={this.handleChange}
              placeholder="Select your pain"
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
