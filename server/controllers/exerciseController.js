// Item Model
const exercise = require('../models/exercise');

module.exports.list = function(req,res){
    exercise.find({}, (err, data)=>{
    if(err){console.log(err)}
    else{return data}
    })
    .sort({date: -1})
    .then(exercise => res.json(exercise))
}

module.exports.create = function(req, res){
    const newExercise = new exercise({
        exercise: req.body.exercise,
        repition: req.body.repition,
        sets: req.body.sets,
        area: req.body.area
    })
    newExercise.save().then(exercise => res.json(exercise))
}

module.exports.remove = function(req,res){
    exercise.findByIdAndRemove({_id: req.body._id}, (err,data)=>{
        if(err){console.log(err)}
        else{
            res.send(req.body)
        }
    })
}