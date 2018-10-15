import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import LoginHeader from "../loginHeader"
import {Redirect} from 'react-router-dom'
import { login, loadExercise } from '../../actions/index';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';


const styles = theme => ({
  container: {
      display: 'flex',
      flexWrap: 'wrap',
  },
  textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
  },
  menu: {
      width: 200,
  },
  button: {
      padding: '20px',
      margin: theme.spacing.unit,
  },
});
class Login extends React.Component {
  state={
    redirectCreate: false,
    redirectMain: false,
    data: {
      email: "",
      password: ""
    }
    
  }
  UserInput(e){
    this.setState({data: {...this.state.data, email: e.target.value} })
  }
  PasswordInput(e){
    this.setState({data:{...this.state.data, password:e.target.value} })
  }

  clickHandler(e){
    e.preventDefault()
    this.props.login(this.state.data)
  }

  componentDidUpdate(prevProps,nextProps){
    if(prevProps !== this.props){
      this.setState({redirectMain: this.props.isAuthenicated})
          this.props.loadExercise()
        
    }
  }

  CreateUser(e){
    e.preventDefault()
    this.setState({redirectCreate: true})
  }
  render() {
    if(this.state.redirectCreate === true){
      return <Redirect push to='/createuser' />
    }
    if(this.props.isAuthenicated1 === true){
      return <Redirect push to='/main' />
    }
    return (
        <div className="Main">
          <LoginHeader />
          <div className="inputMain">
          <div>
          <TextField
            onChange={(e)=>{this.UserInput(e)}}
            id = "Email"
            label = "Email"
            placeholder = "Input Email"
            style={styles.textField}
            margin = "normal" 
          />
          </div>
          <div>
          <TextField
            onChange={(e)=>{this.PasswordInput(e)}}
            id = "Password"
            type = "password"
            label = "Password"
            placeholder = "Password"
            style={styles.textField}
            margin = "normal" 
          />
          </div>
          <Button
            onClick={(e)=>{this.CreateUser(e)}}
            variant="contained" 
            color="primary" 
            type="submit"
            style={{margin: '20px'}}>
            Create User
          </Button>
          <Button
            onClick={(e)=>this.clickHandler(e)} 
            variant="contained" 
            color="secondary" 
            type="submit"
            style={{margin: '20px'}}>
            Submit
            </Button>
          </div>
      </div>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
}

function mapStateToProps(state){
  return{
      isAuthenicated: state.isAuthenicated
  }
} 

const LoginContainer = connect(mapStateToProps, {login , loadExercise})(Login)
export default LoginContainer