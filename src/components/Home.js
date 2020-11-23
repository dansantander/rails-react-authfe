import React, { Component } from 'react'
import Registration from './auth/registration'

class Home extends Component {
  render() {
    console.log('inside Home');
    console.log(this.props);
    const { loggedIn } = this.props;

    return (
      <div>
        <h1>Home</h1>
        <Registration/>
        <h2>{ loggedIn }</h2>
      </div>
    )
  }
}

export default Home;