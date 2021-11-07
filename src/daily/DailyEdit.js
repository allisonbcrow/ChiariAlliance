import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";

class DailyEdit extends React.Component {
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
  componentWillMount() {
    this.setState({
        id: this.state.id,
      food: this.state.food,
      water: this.state.water,
      sleep: this.state.sleep,
      mood: this.state.mood,
      stressLevel: this.state.stressLevel,
      exercise: this.state.exercise,
      painLevel: this.state.painLevel,
      other: this.state.other,
    });
  }


  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.update(event, this.state);
  };

  render() {
    return (
      <div>
        <Modal isOpen={true}>
          <ModalHeader>Log Your Daily Tracker</ModalHeader>
          <ModalBody>
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
              <Button type="submit" color="primary">
                {" "}
                Submit{" "}
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default DailyEdit;
