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
    const { username, email, password, password_confirmation } = this.state

    // console.log(this.state)
    axios.post("http://localhost:3001/registrations", { //axios post takes in 3 parameters: url, things to post, withcredentials:true
      user: {
        username,
        email,
        password,
        password_confirmation
      }
    },
      { withCredentials: true } // withCredentials: true tells the API that it is ok to set that cookie in our client. VERY IMPORTANT TO NOT FORGET!!!
    ).then(response => {
      console.log("registration response", response);
    }).catch(error => {
      console.log("registration error", error)
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <input
            type="text"
            name="username"
            placeholder="username"
            value={this.state.username}
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
