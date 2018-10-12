import React from 'react';
import {Redirect} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

export default class Header extends React.Component{
    state = {
        redirect: false
    }
    isClicked(){
    this.setState({redirect: true})
    }
    render(){
        if(this.state.redirect === true){
            return <Redirect push to="/workoutPlan" />
        }
        return(
        <div style={styles.root}>
        <AppBar position="static" >
            <Toolbar>
                <IconButton style={styles.menuButton} color="inherit" aria-label="Menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="title" color="inherit" style={styles.flex}>
                Fitness Talk
                </Typography>
                <Button color="inherit" onClick={()=>{this.isClicked()}}>Workout Plan</Button>
            </Toolbar>
        </AppBar>
        </div>
        )
    }
}