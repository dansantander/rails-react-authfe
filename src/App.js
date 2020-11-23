import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import { connect } from 'react-redux';

function App(props) {
  console.log(props)
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            < Home loggedIn = {props.loggedIn} />
          </Route>
          <Route exact path="/dashboard">
            < Dashboard loggedIn = {props.loggedIn} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    loggedIn: state.user.loggedIn,
  }
}

export default connect(mapStateToProps)(App);