import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import LoginHeader from "../loginHeader"
import { Redirect } from 'react-router-dom'

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
    FirstName: '',
    LastName: '',
    VPassword: '',
    isTrue: false
  }
  UserInput(e){
    this.setState({Email: e.target.value})
  }
  PasswordInput(e){
    this.setState({Password: e.target.value})
  }
  VPasswordInput(e){
    this.setState({VPassword: e.target.value})
  }
  FirstNameInput(e){
    this.setState({FirstName: e.target.value})
  }
  LastNameInput(e){
    this.setState({LastName: e.target.value})
  }
  isTrue(){
    if(this.state.Password === this.state.VPassword && this.state.FirstName && this.state.LastName && this.state.Email !== ""){
      this.setState({isTrue: true})
    }else{
      this.setState({isTrue: false})
    }
  }
  clickHandler(e){
    e.preventDefault()
    this.isTrue()
  }
  render() {
    if(this.state.isTrue === true){
     return <Redirect push to='/main'/>
    }
    return (
        <div className="CreateUser">
          <LoginHeader />
          <div className="CreateMain">
          <div style={{paddingTop:'10%'}}>
          <TextField
            onChange={(e)=>{this.UserInput(e)}}
            id = "email"
            label = "Email"
            placeholder = "Input Email"
            style={styles.textField}
            margin = "normal" 
          />
          </div>
          <div>
          <TextField
            onChange={(e)=>{this.FirstNameInput(e)}}
            id = "firstName"
            label = "First Name"
            placeholder = "First Name"
            style={styles.textField}
            margin = "normal" 
          />
          </div>
          <div>
          <TextField
            onChange={(e)=>{this.LastNameInput(e)}}
            id = "lastName"
            label = "Last Name"
            placeholder = "Last Name"
            style={styles.textField}
            margin = "normal" 
          />
          </div>
          <div>
          <TextField
            onChange={(e)=>{this.PasswordInput(e)}}
            id = "Password"
            label = "Password"
            type='password'
            placeholder = "Password"
            style={styles.textField}
            margin = "normal" 
          />
          </div>
          <div>
          <TextField
            onChange={(e)=>{this.VPasswordInput(e)}}
            id="VPassword"
            type='password'
            label="Verify Password"
            placeholder = "Verify Password"
            style={styles.textField}
            margin = "normal" 
          />
          </div>
          <Button
            onClick={(e)=>this.clickHandler(e)} 
            variant="contained" 
            color="secondary" 
            type="submit"
            style={{margin: '30px'}}>
            Submit
            </Button>
          </div>
      </div>
    );
  }
}