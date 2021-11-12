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

class MedicalEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    //  date: this.props.medicalToUpdate.date,
      medicalConditions: this.props.medicalToUpdate.medicalConditions,
      previousSurgeries: this.props.medicalToUpdate.previousSurgeries,
      previousHospitalizations: this.props.medicalToUpdate.previousHospitalizations,
      currentMedications: this.props.medicalToUpdate.currentMedications,
      allergies: this.props.medicalToUpdate.allergies,
      height: this.props.medicalToUpdate.height,
      weight: this.props.medicalToUpdate.weight,
      other: this.props.medicalToUpdate.other
    };
  }

  medicalUpdate = (event, medical) => {
    console.log(this.props.token)
     event.preventDefault();
    fetch(`http://localhost:3000/medical/update/${this.props.medicalToUpdate.id}`, {
      method: 'PUT',
      body: JSON.stringify({ 
          medical: {
            // date: this.state.editDate,
            medicalConditions: this.state.editMedicalConditions,
            previousSurgeries: this.state.editPreviousSurgeries,
            previousHospitalizations: this.state.editPreviousHospitalizations,
            currentMedications: this.state.editCurrentMedications,
            allergies: this.state.editAllergies,
            height: this.state.editHeight,
            weight: this.state.editWeight,
            other: this.state.editOther,
          }
    }),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': this.props.token
      })
    })
    .then(() => {
        this.props.updateOff();
        this.props.fetchMedicalMine();
    })
}
  
  
  render() {
    return (
      <div>
        <Modal isOpen={true}>
          <ModalHeader>Log Your Medical Tracker</ModalHeader>
          <ModalBody>
          <Form onSubmit={this.medicalUpdate}>
          {/* <FormGroup>
            <Label for="date">Date</Label>
            <Input
              id="date"
              type="text"
              name="date"
              value={this.state.editDate}
              placeholder="Enter here"
              onChange={e => this.setState({editDate: e.target.value})}
            />
          </FormGroup> */}
          <FormGroup>
            <Label for="medicalConditions">Medical Conditions</Label>
            <Input
              id="medicalConditions"
              type="text"
              name="medicalConditions"
              value={this.state.editMedicalConditions}
              placeholder="Enter here"
              onChange={e => this.setState({editMedicalConditions: e.target.value})}
            />
          </FormGroup>
          <FormGroup>
            <Label for="previousSurgeries">Previous Surgeries</Label>
            <Input
              id="previousSurgeries"
              type="text"
              name="previousSurgeries"
              value={this.state.editPreviousSurgeries}
              placeholder="Enter here"
              onChange={e => this.setState({editPreviousSurgeries: e.target.value})}
            />
          </FormGroup>
          <FormGroup>
            <Label for="previousHospitalizations">Previous Hospitalizations</Label>
            <Input
              id="previousHospitalizations"
              type="text"
              name="previousHospitalizations"
              value={this.state.editPreviousHospitalizations}
              placeholder="Enter here"
              onChange={e => this.setState({editPreviousHospitalizations: e.target.value})}
            />
          </FormGroup>
          <FormGroup>
            <Label for="currentMedications">Current Medications</Label>
            <Input
              id="currentMedications"
              type="text"
              name="currentMedications"
              value={this.state.editCurrentMedications}
              placeholder="Enter here"
              onChange={e => this.setState({editCurrentMedications: e.target.value})}
            />
          </FormGroup>
          <FormGroup>
            <Label for="allergies">Allergies</Label>
            <Input
              id="allergies"
              type="text"
              name="allergies"
              value={this.state.editAllergies}
              placeholder="Enter here"
              onChange={e => this.setState({editAllergies: e.target.value})}
            />
          </FormGroup>
          <FormGroup>
            <Label for="height">Height</Label>
            <Input
              id="height"
              type="text"
              name="height"
              value={this.state.editHeight}
              placeholder="Enter here"
              onChange={e => this.setState({editHeight: e.target.value})}
            />
          </FormGroup>
          <FormGroup>
            <Label for="weight">Weight</Label>
            <Input
              id="weight"
              type="text"
              name="weight"
              value={this.state.editWeight}
              placeholder="Enter here"
              onChange={e => this.setState({editWeight: e.target.value})}
            />
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
          <Button type="post" color="primary">
            Submit
          </Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default MedicalEdit;
