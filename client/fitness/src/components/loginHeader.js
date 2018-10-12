import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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

export default class LoginHeader extends React.Component{
    render(){
        return(
        <div style={styles.root}>
        <AppBar position="static" >
            <Toolbar>
                <Typography variant="title" color="inherit" style={styles.flex}>
                Fitness Talk
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
        </div>
        )
    }
}