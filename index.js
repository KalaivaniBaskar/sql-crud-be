import express from "express";
import bodyParser from "body-parser"
import cors from "cors"
import { studentRouter } from "./Routes/studentRoutes.js";
const app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api/student', studentRouter)

app.get('/', (req, res) => { 
    res.send("Welcome to sql-crud-app") 
})
 
app.listen(5000, () => {
    console.log("Server running on port 5000")
})