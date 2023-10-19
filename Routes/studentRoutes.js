import { db } from "../db.js";
import express from "express"

const router = express.Router();

// fetch all records from table
router.get('/all', (req, res) => { 
    const ins_query = "SELECT * from student_info"
    db.query(
        ins_query,
        function(err, results) {
          //  console.log("error ", err)
          //console.log(results); 
          if(results) {
            res.status(200).json({data: results})
          }
          if(err){
            res.status(500).json({message: "error",error: err})
          }
        }
      );
     
}) 

//add new record 
router.post('/add', (req, res) => { 

    const {student_name, student_course, student_task, student_score, student_email} = req.body;
    //console.log(req.body)
    const ins_query = "INSERT INTO student_info(student_name, student_course, student_task, student_score, student_email) VALUES (?,?,?,?,?)";

     try {
        db.query(
            ins_query,[student_name, student_course, student_task, student_score, student_email],
            function(err, results) {
              //console.log(results); 
              if(results) {
                res.status(200).json({message: "Student added",data: results})
              }
              if(err){
                res.status(500).json({message: "error",error: err})
              }
            }
          );
   
     } catch (error) {
        res.status(500).json({message: "error",error: err})

     }
    }) 

//edit new record 
router.put('/edit', (req, res) => { 

    const {student_id, student_name, student_course, student_task, student_score, student_email} = req.body;
    //console.log(req.body) 
    
    const upd_query = "UPDATE student_info SET student_name=?, student_course=?, student_task=?, student_score=?, student_email=? WHERE student_id=?";

     try {
        db.query(
            upd_query,[student_name, student_course, student_task, student_score, student_email,student_id],
            function(err, results) {
              //console.log(results); 
              if(results) {
                res.status(200).json({message: "Student updated",data: results})
              }
              if(err){
                res.status(500).json({message: "error",error: err})
              }
            }
          );
   
     } catch (error) {
        res.status(500).json({message: "error",error: err})

     }
    }) 

    //delete record 
router.delete('/remove/:id', (req, res) => { 

    const {id} = req.params;
    //console.log(id, typeof id) - it works even though id is received as string
    const del_query = "DELETE FROM student_info WHERE student_id = ?";

     try {
        db.query(
            del_query,id,
            function(err, results) {
              //console.log(results); 
              if(results) {
                res.status(200).json({message: "Student removed"})
              }
              if(err){
                res.status(500).json({message: "error",error: err})
              }
            }
          );
   
     } catch (error) {
        res.status(500).json({message: "error",error: err})

     }
    }) 
export const studentRouter = router;