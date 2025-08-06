const express = require('express')
const router = express.Router()

const{ v4:uuidv4 } = require('uuid')
let students = require('../data/students.json')

router.get('/', (req, res) =>{
    res.json(students)
})

router.get('/:id', (req, res) => {
    const student = students.find((s) => s.id == req.params.id)
    student?res.json(student):res.status(404).json({msg:'Not Found'});
})

router.post('/', (req, res) => {
    const newStudent = { id: uuidv4(), ...req.body}
    students.push(newStudent)
    res.status(201).json(newStudent)
})

router.put('/:id', (req, res) => {
    const index = students.findIndex(s => s.id === req.params.id)
    if(index !== -1){
        students[index] = {...students[index], ...req.body}
        res.json(students[index])
    }
    else{
        res.status(404).json({msg: 'Not Found'})
    }
})

router.delete('/:id', (req, res) => {
    students = students.filter(s => s.id !== req.params.id)
    res.json({msg: 'Student deleted'})
})

module.exports = router