import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

export default class Loginclass extends React.Component {
    constructor(props){
        super(props);
        this.state = { email:'', password:''}
    }

handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/user/login", {
      method: "POST",
      body: JSON.stringify({ user: { email: this.state.email, password: this.state.password } }),
      headers: new Headers({
        "Content-Type": "application/json",
      })
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        this.props.updateToken(data.sessionToken);
      });
  };

  render() {
  return(
    <div>
        <h1>Login</h1>
        <Form onSubmit={this.handleSubmit}>
        <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input onChange={(e) => this.setState({email: e.target.value}) } name="email" placeholder="Email" value={this.state.email} required/> 
        </FormGroup>
        <FormGroup>
        <Label htmlFor="password">Password</Label>
        <Input onChange={(e) => this.setState({password: e.target.value}) } name="password" placeholder="Password" value={this.state.password} required/> 
        </FormGroup>
            <Button type="submit">Login</Button> 
        </Form>
    </div>
)
}
}

