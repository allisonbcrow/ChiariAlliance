import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

export default class Register extends React.Component {
constructor(props){
    super(props);
    this.state = {firstName:'', lastName:'', role:'', email:'', password:''}
}


 handleSubmit = (e) => {
    e.preventDefault();
    console.log("zipperhead");
    fetch("http://localhost:3000/user/register", {
      method: "POST",
      body: JSON.stringify({
        user: {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          role: this.state.role,
          email: this.state.email,
          password: this.state.password
        },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        // this.props.updateToken(data.sessionToken);
        localStorage.setItem("firstName", this.state.firstName)
      });
  };

render() {
  return (
    <div>
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
            <Label htmlFor="role">Role</Label>
            <Input onChange={(e) => this.setState({role: e.target.value}) } name="role" placeholder="Role" value={this.state.role} required/> 
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
