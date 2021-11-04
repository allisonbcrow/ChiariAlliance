// import React from "react";
// import {
//   Button,
//   Form,
//   FormGroup,
//   Label,
//   Input,
//   Modal,
//   ModalHeader,
//   ModalBody,
// } from "reactstrap";

// class DailyEdit extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       food: "",
//       water: 0,
//       sleep: 0,
//       mood: "",
//       stressLevel: 0,
//       exercise: "",
//       painLevel: 0,
//       other: "",
//     };
//   }
//   componentWillMount() {
//     this.setState({
//       id: this.props.daily.id,
//       food: this.props.daily.food,
//       water: this.props.daily.water,
//       sleep: this.props.daily.sleep,
//       mood: this.props.daily.mood,
//       stressLevel: this.props.daily.stressLevel,
//       exercise: this.props.daily.exercise,
//       painLevel: this.props.daily.painLevel,
//       other: this.props.daily.other,
//     });
//   }

//   handleChange = (event) => {
//     this.setState({
//       [event.target.name]: event.target.value,
//     });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();
//     this.props.update(event, this.state);
//   };

//   render() {
//     return (
//       <div>
//         <Modal isOpen={true}>
//           <ModalHeader>Log Your Daily Tracker</ModalHeader>
//           <ModalBody>
//             <Form onSubmit={this.handleSubmit}>
//               <FormGroup>
//                 <Label for="food">Food</Label>
//                 <Input
//                   id="food"
//                   type="text"
//                   name="food"
//                   value={this.state.food}
//                   placeholder="Enter here"
//                   onChange={this.handleChange}
//                 />
//               </FormGroup>
//               <FormGroup>
//                 <Label for="water">Water</Label>
//                 <Input
//                   id="water"
//                   type="text"
//                   name="water"
//                   value={this.state.water}
//                   placeholder="Enter here in oz"
//                   onChange={this.handleChange}
//                 />
//               </FormGroup>
//               <FormGroup>
//                 <Label for="sleep">Sleep</Label>
//                 <Input
//                   id="sleep"
//                   type="text"
//                   name="sleep"
//                   value={this.state.sleep}
//                   placeholder="Enter here in hrs"
//                   onChange={this.handleChange}
//                 />
//               </FormGroup>
//               <FormGroup>
//                 <Label for="mood">Mood</Label>
//                 <Input
//                   type="select"
//                   name="mood"
//                   id="mood"
//                   value={this.state.mood}
//                   onChange={this.handleChange}
//                   placeholder="Select your mood"
//                 >
//                   <option></option>
//                   <option value="Time">Happy</option>
//                   <option value="Weight">Anxious</option>
//                   <option value="Distance">Irritated</option>
//                   <option value="Distance">Sad</option>
//                   <option value="Distance">Calm</option>
//                   <option value="Distance">Tired</option>
//                   <option value="Distance">Numb</option>
//                 </Input>
//               </FormGroup>
//               <FormGroup>
//                 <Label for="stress level">Stress Level</Label>
//                 <Input
//                   type="select"
//                   name="stress level"
//                   id="stress level"
//                   value={this.state.stressLevel}
//                   onChange={this.handleChange}
//                   placeholder="Select your stress level"
//                 >
//                   <option></option>
//                   <option value="0">0</option>
//                   <option value="1">1</option>
//                   <option value="2">2</option>
//                   <option value="3">3</option>
//                   <option value="4">4</option>
//                   <option value="5">5</option>
//                 </Input>
//               </FormGroup>
//               <FormGroup>
//                 <Label for="exercise">Exercise</Label>
//                 <Input
//                   id="exercise"
//                   type="text"
//                   name="exercise"
//                   value={this.state.exercise}
//                   placeholder="Enter exercise"
//                   onChange={this.handleChange}
//                 />
//               </FormGroup>
//               <FormGroup>
//                 <Label for="pain level">Pain Level</Label>
//                 <Input
//                   type="select"
//                   name="pain level"
//                   id="pain level"
//                   value={this.state.painLevel}
//                   onChange={this.handleChange}
//                   placeholder="Select your pain level"
//                 >
//                   <option></option>
//                   <option value="0">0</option>
//                   <option value="1">1</option>
//                   <option value="2">2</option>
//                   <option value="3">3</option>
//                   <option value="4">4</option>
//                   <option value="5">5</option>
//                 </Input>
//               </FormGroup>
//               <FormGroup>
//                 <Label for="other">Notes</Label>
//                 <Input
//                   id="other"
//                   type="text"
//                   name="other"
//                   value={this.state.other}
//                   placeholder="Enter other information"
//                   onChange={this.handleChange}
//                 />
//               </FormGroup>
//               <Button type="submit" color="primary">
//                 {" "}
//                 Submit{" "}
//               </Button>
//             </Form>
//           </ModalBody>
//         </Modal>
//       </div>
//     );
//   }
// }

// export default DailyEdit;
