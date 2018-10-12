import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Main from './components/routes/main'
import Login from './components/routes/login'
import CreateUser from './components/routes/CreateUser'
import WorkoutPlan from './components/routes/workoutPlan'
import {BrowserRouter, Route} from 'react-router-dom'
import { loadExercise, exerciseDeleted } from './actions'
import {connect} from 'react-redux'

class App extends Component {
  componentWillMount(){
    this.props.loadExercise()
    }

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

App.propTypes = {
  exerciseDeleted: PropTypes.func.isRequired,
  loadExercise: PropTypes.func.isRequired,
  exercise: PropTypes.array.isRequired,
  newExercise: PropTypes.object
}

function mapStateToProps(state){
  return{
      exercise: state.exercise,
      deleteExercise: state.deleteExercise
  }
} 

const AppContainer = connect(mapStateToProps, {loadExercise , exerciseDeleted})(App)
export default AppContainer
