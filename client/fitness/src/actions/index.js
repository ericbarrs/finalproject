export function loadExercise(){
    return function(dispatch){
        fetch('/exercise')
        .then(res => res.json())
        .then(exercise =>{ 
            const listExercise = exercise.map(function(value){
            return dispatch(loadedExercise(value))
        })
            return listExercise
        })
    }
}
    function loadedExercise(exercise){
    return {
        type: "GET_EXERCISE",
        value: exercise
    }
}

export function createExercise(exerciseData) {
    return function (dispatch) {
        fetch("/exercise", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(exerciseData)
        })
        .then(res => res.json())
        .then(data => dispatch(saveExercise(data)));
    };
}
function saveExercise(newExercise){
    return {
        type: "CREATE_EXERCISE",
        value: newExercise
    }
}

export function exerciseDeleted(Data){
    return function(dispatch){
        fetch("/delete", {
            method: "DELETE",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(Data)
        })
        .then(res => res.json())
        .then(data => dispatch(DeleteExercise(data)))
    }
}
function DeleteExercise(deletedExercise){
    console.log(deletedExercise)
    return {
        type: "DELETE_EXERCISE",
        value: deletedExercise
    }
}