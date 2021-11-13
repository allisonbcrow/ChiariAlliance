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
import APIURL from './helpers/environment';

class DailyEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // editDate: this.props.dailyToUpdate.date,
      editFood: this.props.dailyToUpdate.food,
      editWater: this.props.dailyToUpdate.water,
      editSleep: this.props.dailyToUpdate.sleep,
      editMood: this.props.dailyToUpdate.mood,
      editStressLevel: this.props.dailyToUpdate.stressLevel,
      editExercise: this.props.dailyToUpdate.exercise,
      editPainLevel: this.props.dailyToUpdate.painLevel,
      editOther: this.props.dailyToUpdate.other,
    };
  }

  dailyUpdate = (event, daily) => {
    console.log(this.props.token)
     event.preventDefault();
    fetch(`${APIURL}/daily/update/${this.props.dailyToUpdate.id}`, {
      method: 'PUT',
      body: JSON.stringify({ 
          daily: {
            // date: this.state.editDate,
              food: this.state.editFood,
              water: this.state.editWater,
              sleep: this.state.editSleep,
              mood: this.state.editMood,
              stressLevel: this.state.editStressLevel,
              exercise: this.state.editExercise,
              painLevel: this.state.editPainLevel,
              other: this.state.editOther 
          }
    }),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': this.props.token
      })
    })
    .then(() => {
        this.props.updateOff();
        this.props.fetchDaily();
        this.props.fetchDailyMine();
    })
}
  
  
  render() {
    return (
      <div>
        <Modal isOpen={true}>
          <ModalHeader>Log Your Daily Tracker</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.dailyUpdate}>
            {/* <FormGroup>
                <Label for="date">Date</Label>
                <Input
                  id="date"
                  type="date"
                  name="date"
                  value={this.state.editDate}
                  placeholder="Enter here"
                  onChange={e => this.setState({editDate: e.target.value})}
                />
              </FormGroup> */}
              <FormGroup>
                <Label for="food">Food</Label>
                <Input
                  id="food"
                  type="text"
                  name="food"
                  value={this.state.editFood}
                  placeholder="Enter here"
                  onChange={e => this.setState({editFood: e.target.value})}
                />
              </FormGroup>
              <FormGroup>
                <Label for="water">Water</Label>
                <Input
                  id="water"
                  type="text"
                  name="water"
                  value={this.state.editWater}
                  placeholder="Enter here in oz"
                  onChange={e => this.setState({editWater: e.target.value})}
                />
              </FormGroup>
              <FormGroup>
                <Label for="sleep">Sleep</Label>
                <Input
                  id="sleep"
                  type="text"
                  name="sleep"
                  value={this.state.editSleep}
                  placeholder="Enter here in hrs"
                  onChange={e => this.setState({editSleep: e.target.value})}
                />
              </FormGroup>
              <FormGroup>
                <Label for="mood">Mood</Label>
                <Input
                  type="select"
                  name="mood"
                  id="mood"
                  onChange={e => this.setState({editMood: e.target.value})}
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
                  onChange={e => this.setState({editStressLevel: e.target.value})}
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
                  value={this.state.editExercise}
                  placeholder="Enter exercise"
                  onChange={e => this.setState({editExercise: e.target.value})}
                />
              </FormGroup>
              <FormGroup>
                <Label for="pain level">Pain Level</Label>
                <Input
                  type="select"
                  name="pain level"
                  id="pain level"
                  onChange={e => this.setState({editPainLevel: e.target.value})}
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
                  value={this.state.editOther}
                  placeholder="Enter other information"
                  onChange={e => this.setState({editOther: e.target.value})}
                />
              </FormGroup>
              <Button type="submit" color="primary"
              sx={{ p: 2, border: '1px dashed grey' }}>
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
