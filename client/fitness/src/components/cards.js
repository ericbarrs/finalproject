import React from "react";
import { loadExercise, exerciseDeleted } from '../actions/index';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';


class Cards extends React.Component {

    clickHandler=(e,value,index)=>{
        e.preventDefault()
        value.index = index
        this.props.exerciseDeleted(value)
        }
    
    
    GetCards(clickHandler){
        return this.props.exercise.map(function(value,index){
            return(
            <div key={value._id} index={index} className='exercises'>
            <div>{value.exercise}</div>
            <div>{value.area}</div>
            <div>{value.repition} Reps</div>
            <div>{value.sets} Sets</div>
            <button onClick={(e)=>{clickHandler(e,value,index)}}>delete</button>
            </div>
            )
        })
    }

    render() {
        if (this.props.exercise.length !== 0){
        return (
            <div className="cards">{this.GetCards(this.clickHandler)}</div>
        )
        }return null
    }
}
Cards.propTypes = {
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

const cardsContainer = connect(mapStateToProps, {loadExercise , exerciseDeleted})(Cards)
export default cardsContainer