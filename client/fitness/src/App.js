import React, { Component } from 'react';
import './App.css';
import Main from './components/routes/main'
import Login from './components/routes/login'
import CreateUser from './components/routes/CreateUser'
import WorkoutPlan from './components/routes/workoutPlan'
import {BrowserRouter, Route} from 'react-router-dom'


export default class App extends Component {

  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Login}/>
        <Route path="/createuser" component={CreateUser}/>
        <Route path="/main" component={Main}/>
        <Route path="/workoutplan" component={WorkoutPlan}/>
      </div>
      </BrowserRouter>
    );
  }
}

