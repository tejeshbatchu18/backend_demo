const express = require("express");
const router = express.Router();
const Workout=require("../models/workout");

router.get("", async (req,res,next)=>{
    try{
        const workouts=await Workout.find();
    res.status(200).json(workouts);
    }
    catch(err){
        next(err);
    }
});

router.get("/",async(req,res,next)=>{
    try{
        const id = req.params.id;

    const workout = await Workout.findById(id);

    if (!workout) {
        return res.status(404).json({
            message: "workout not found"
        });
    }

    res.status(200).json({
        exercise: workout.exercise,
        sets: workout.sets,
        muscleGroup:workout.muscleGroup
    });
    }
    catch(err){
        next(err);
    }
});
router.post("/",async(req,res,next)=>{
    try{
            const {exercise,sets,muscleGroup} = req.body;
    
            if (!exercise) {
                return res.status(400).json({
                    message: "Exercise karoi"
                })
            }
    
            if (!sets) {
                return res.status(400).json({
                    message: "really completed sets?"
                })
            }
            if (!muscleGroup) {
                return res.status(400).json({
                    message: "insert your muscleGroup"
                })
            }
            const workout = await Workout.create(req.body);
    
            console.log(workout)
            return res.status(201).json(workout);
        }
        catch(err){
            next(err);
        }
});

router.put("/:id",async(req,res,next)=>{
    try{
            const {exercise,sets,muscleGroup} = req.body;
    
            if (!exercise) {
                return res.status(400).json({
                    message: "Exercise karo!"
                })
            }
    
            if (!sets) {
                return res.status(400).json({
                    message: "really completed sets?"
                })
            }
            if (!muscleGroup) {
                return res.status(400).json({
                    message: "insert your muscleGroup"
                })
            }
    
            const workout = await Workout.create(req.body);
    
            console.log(workout)
            return res.status(201).json(workout);
        }
        catch(err){
            next(err);
        }
});

router.delete("/:id",async(req,res,next)=>{
    try{
        const id = req.params.id;
    const workout =await  Workout.findByIdAndDelete(id);

    res.status(200).json({
        message: "Workout deleted le!"
    })
    }catch(err){
        next(err);
    }
});

module.exports = router;