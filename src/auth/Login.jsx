import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

export default class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {name:'', email:'', password:'', isAdmin: false}
    }

    
handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/user/login", {
      method: "POST",
      body: JSON.stringify({ user: { email: this.state.email, password: this.state.password, isAdmin: this.state.isAdmin } }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((res) => {
        if (!res.ok) {
          alert(
            'Login does not exist. Please create an account by clicking "Register" '
          );
        }
        return res.json();
      })
      .then((data) => {
        console.log(data)
        this.props.updateToken(data.sessionToken);
        localStorage.setItem("firstName", data.user.firstName);
        localStorage.setItem("isAdmin", data.user.isAdmin);
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
        <Input onChange={(e) => this.setState({password: e.target.value}) } name="password" placeholder="Password" value={this.state.password} required /> 
        </FormGroup>
            <Button type="submit">Login</Button> 
        </Form>
    </div>
)
}
}

