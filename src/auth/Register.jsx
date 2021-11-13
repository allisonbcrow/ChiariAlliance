import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import APIURL from '../helpers/environment';

export default class Register extends React.Component {
constructor(props){
    super(props);
    this.state = {firstName:'', lastName:'', isAdmin: false, email:'', password:''}
}


 handleSubmit = (e) => {
    e.preventDefault();
    console.log("zipperhead");
    fetch(`${APIURL}user/register`, {
      method: "POST",
      body: JSON.stringify({
        user: {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          isAdmin: this.state.isAdmin,
          email: this.state.email,
          password: this.state.password
        },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((res) => {
        if (!res.ok) {
          alert(
            'User already exists under that email. Please log in to your account by clicking "Login" '
          );
        }
        return res.json();
      })
      .then((data) => {
        console.log(data)
        this.props.updateToken(data.sessionToken);
        localStorage.setItem("firstName", this.state.firstName)
        localStorage.setItem("isAdmin", this.state.isAdmin)
      });
  };

render() {
  return (
    <div className="div">
    <h1>Sign Up</h1>
    <Form onSubmit={this.handleSubmit}>
    <FormGroup>
            <Label htmlFor="firstname">First Name</Label>
            <Input onChange={(e) => this.setState({firstName: e.target.value}) } name="firstname" placeholder="First Name" value={this.state.firstName} required/> 
        </FormGroup>
        <FormGroup>
            <Label htmlFor="lastname">Last Name</Label>
            <Input onChange={(e) => this.setState({lastName: e.target.value}) } name="lastname" placeholder="Last Name" value={this.state.lastName} required/> 
        </FormGroup>
        <FormGroup>
            <Label for="isAdmin">Role</Label>
            <Input
              type="select"
              name="isAdmin"
              id="isAdmin"
              onChange={this.handleChange}
              placeholder="Select your role"
            >
              <option></option>
              <option value="Patient">Patient</option>
              <option value="Admin">Admin</option>
            </Input>
          </FormGroup>
        <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input onChange={(e) => this.setState({email: e.target.value}) } name="email" placeholder="Email" value={this.state.email} required/> 
        </FormGroup>
        <FormGroup>
        <Label htmlFor="password">Password</Label>
        <Input onChange={(e) => this.setState({password: e.target.value}) } name="password" placeholder="Password" value={this.state.password} required/> 
        </FormGroup>
        <Button type="submit">Signup</Button>
    </Form>
</div>
  );
};
}
