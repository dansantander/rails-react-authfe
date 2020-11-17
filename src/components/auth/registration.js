import React, { Component } from 'react';
import axios from 'axios';

export default class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "", 
      password_confirmation: "", 
      registrationErrors: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    // console.log("handle change", e);
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    // console.log(this.state)
    axios.post("http://localhost:3001/registrations")
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <input
            type="text"
            name="username"
            placeholder="username"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="name@domain.com"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />

          <input
            type="password"
            name="password_confirmation"
            placeholder="Password confirmation"
            value={this.state.password_confirmation}
            onChange={this.handleChange}
            required
          />

          <button type="submit">Register</button>
        </form>
      </div>
    )
  }
}
