const express=require("express");
const router=express.Router();
const StudentController=require("../Controllers/StudentController")

router.get('/:id',StudentController.details)
router.get('/classrooms/:id',StudentController.classrooms)
router.get('/classrooms/practice?')

module.exports=router