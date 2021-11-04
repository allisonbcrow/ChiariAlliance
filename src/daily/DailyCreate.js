// import React, { Component } from "react";
// import { Button, Form, FormGroup, Label, Input } from "reactstrap";

// class DailyCreate extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       food: "",
//       water: 0,
//       sleep: 0,
//       mood: "",
//       stressLevel: 0,
//       exercise: '',
//       painLevel: 0,
//       other: ""
//     };
//   }

//   handleChange = (event) => {
//     this.setState({
//       [event.target.name]: event.target.value,
//     });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();
//     fetch(`http://localhost:3000/daily/create/`, {
//       method: "POST",
//       body: JSON.stringify({ log: this.state }),
//       headers: new Headers({
//         "Content-Type": "application/json",
//         Authorization: this.props.token,
//       }),
//     })
//       .then((res) => res.json())
//       .then((FeedData) => {
//         this.props.updateDailyArray();
//         this.setState({
//           daily: {
//             food: this.state.food,
//             water: this.state.water,
//             sleep: this.state.sleep,
//             mood: this.state.mood,
//             stressLevel: this.state.stressLevel,
//             exercise: this.state.exercise,
//             painLevel: this.state.painLevel,
//             other: this.state.other
//           },
//         });
//       });
//   };

//   render() {
//     return (
//       <div>
//         <h3>Daily Health Log</h3>
//         <hr />
//         <Form onSubmit={this.handleSubmit}>
//           <FormGroup>
//             <Label for="food">Food</Label>
//             <Input
//               id="food"
//               type="text"
//               name="food"
//               value={this.state.food}
//               placeholder="Enter here"
//               onChange={this.handleChange}
//             />
//           </FormGroup>
//           <FormGroup>
//             <Label for="water">Water</Label>
//             <Input
//               id="water"
//               type="text"
//               name="water"
//               value={this.state.water}
//               placeholder="Enter here in oz"
//               onChange={this.handleChange}
//             />
//           </FormGroup>
//           <FormGroup>
//             <Label for="sleep">Sleep</Label>
//             <Input
//               id="sleep"
//               type="text"
//               name="sleep"
//               value={this.state.sleep}
//               placeholder="Enter here in hrs"
//               onChange={this.handleChange}
//             />
//           </FormGroup>
//           <FormGroup>
//             <Label for="mood">Mood</Label>
//             <Input
//               type="select"
//               name="mood"
//               id="mood"
//               onChange={this.handleChange}
//               placeholder="Select your mood"
//             >
//               <option></option>
//               <option value="Time">Happy</option>
//               <option value="Weight">Anxious</option>
//               <option value="Distance">Irritated</option>
//               <option value="Distance">Sad</option>
//               <option value="Distance">Calm</option>
//               <option value="Distance">Tired</option>
//               <option value="Distance">Numb</option>
//             </Input>
//           </FormGroup>
//           <FormGroup>
//             <Label for="stress level">Stress Level</Label>
//             <Input
//               type="select"
//               name="stress level"
//               id="stress level"
//               onChange={this.handleChange}
//               placeholder="Select your stress level"
//             >
//               <option></option>
//               <option value="0">0</option>
//               <option value="1">1</option>
//               <option value="2">2</option>
//               <option value="3">3</option>
//               <option value="4">4</option>
//               <option value="5">5</option>
//             </Input>
//           </FormGroup>
//           <FormGroup>
//             <Label for="exercise">Exercise</Label>
//             <Input
//               id="exercise"
//               type="text"
//               name="exercise"
//               value={this.state.exercise}
//               placeholder="Enter exercise"
//               onChange={this.handleChange}
//             />
//           </FormGroup>
//           <FormGroup>
//             <Label for="pain level">Pain Level</Label>
//             <Input
//               type="select"
//               name="pain level"
//               id="pain level"
//               onChange={this.handleChange}
//               placeholder="Select your pain level"
//             >
//               <option></option>
//               <option value="0">0</option>
//               <option value="1">1</option>
//               <option value="2">2</option>
//               <option value="3">3</option>
//               <option value="4">4</option>
//               <option value="5">5</option>
//             </Input>
//           </FormGroup>
//           <FormGroup>
//             <Label for="other">Notes</Label>
//             <Input
//               id="other"
//               type="text"
//               name="other"
//               value={this.state.other}
//               placeholder="Enter other information"
//               onChange={this.handleChange}
//             />
//           </FormGroup>
//           <Button type="submit" color="primary">
//             {" "}
//             Submit{" "}
//           </Button>
//         </Form>
//       </div>
//     );
//   }
// }

// export default DailyCreate;
