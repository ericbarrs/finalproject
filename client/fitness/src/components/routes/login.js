import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import LoginHeader from "../loginHeader"
import {Redirect} from 'react-router-dom'

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
export default class Login extends React.Component {
  state={
    Email: '',
    Password: '',
    redirect: false,
    isAuthenicated: false,
  }
  UserInput(e){
    this.setState({Email: e.target.value})
  }
  PasswordInput(e){
    this.setState({Password: e.target.value})
  }

  clickHandler(e){
    e.preventDefault()

  }
  CreateUser(e){
    e.preventDefault()
    this.setState({redirect: true})
  }
  render() {
    if(this.state.redirect === true){
      return <Redirect push to='/createuser' />
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