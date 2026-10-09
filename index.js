const express = require("express");
const app=express();
const PORT=3000;
const workoutRoutes = require("./routes/workout");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const errorHandler=require("./middleware/errorHandler");
dotenv.config();
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        message: "finallyyy, succesful!"
    });
});

app.use((req,res,next)=>{
    console.log(req.method);
    console.log(req.url);
    next();
});

app.use("/workout", workoutRoutes)

app.use((req, res) => {
    res.status(404).json({
        message: "check url once!"
    })
});

app.use(errorHandler);

app.listen(PORT, () => {
    connectDB();
    console.log("server listening on " + PORT);
});
