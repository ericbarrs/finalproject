import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { createExercise } from '../actions/index';
import { connect } from 'react-redux';


// let createExercise = require("../actions/exercise").createExercise()

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
        margin: theme.spacing.unit,
    },
});


class Input extends React.Component{
    state = {
    exercise: "",
    repition: "",
    sets: "",
    area: "",
    isTrue: false
    }



    exerciseHandler(e){
        let exercise = e.target.value
        this.setState({exercise: exercise});
        this.isTrue() 
    }
    repitionHandler(e) {
        let repition = e.target.value
        this.setState({ repition: repition});
        this.isTrue() 
    }
    setsHandler(e){
        let sets = e.target.value
        this.setState({sets: sets}); 
        this.isTrue() 
    }
    areaHandler(e) {
        let area = e.target.value
        this.setState({ area: area });
        this.isTrue() 
    }
    isTrue(){
        if(
            this.state.area !== undefined && this.state.area !== "" &&
            this.state.exercise !== undefined && this.state.exercise !== "" &&
            this.state.sets !== Number && this.state.area !== "" &&
            this.state.repition !== Number && this.state.repition !== ""
            
        ){
            this.setState({isTrue: true})
        }else{
            this.setState({ isTrue: false })

        }
    }
    clickHandler(e){
        e.preventDefault()
        this.isTrue()
        if(this.state.isTrue === true){
            const makeExercise = {
                exercise: this.state.exercise,
                repition: this.state.repition,
                sets: this.state.sets,
                area: this.state.area,
            }
            this.props.createExercise(makeExercise)
            this.setState({
                exercise: "",
                repition: 0,
                sets: 0,
                area: "",
            })
        }
    }
    render(){
        return(
            <div>
            <h1 style={{textAlign:"center"}}>Input Your Workout</h1>
            <div className="input">
                <div className = "inputfield" >
                <TextField
                    onChange={(e)=>{this.exerciseHandler(e)}}
                    id = "exercise"
                    label = "Exercise"
                    placeholder = "Type an exercise"
                    style={styles.textField}
                    margin = "normal" 
                    value={this.state.exercise}
                    />
                </div>
                <div className = "inputfield" >
                <TextField
                    onChange={(e) => { this.areaHandler(e) }}
                    id = "area"
                    label = "Area"
                    placeholder = "target Area"
                    style = {styles.textField}
                    margin = "normal" 
                    value={this.state.area}
                    />
                </div>
                < div className = "inputfield" >
                < TextField
                    onChange={(e) => { this.repitionHandler(e) }}
                    id = "repition"
                    label = "Repition"
                    type = 'number'
                    placeholder = "number of Reps"
                    style = {styles.textField}
                    margin = "normal" 
                    value= {this.state.repition}
                    />
                </div>
                < div className = "inputfield" >
                < TextField
                    onChange={(e) => { this.setsHandler(e) }}
                    id = "sets"
                    label = "Sets"
                    type = "number"
                    placeholder = "number of Sets"
                    style = {styles.textField}
                    margin = "normal"
                    value={this.state.sets}
                    />
                </div>

            </div>
            <div className="submit">
                <Button
                onClick={(e)=>this.clickHandler(e)} 
                variant="contained" 
                color="primary" 
                type="submit"
                style={styles.button}>
                Add Workout
                </Button>
            </div>
        </div>
        )
    }
}

export default connect(null, {createExercise})(Input)
