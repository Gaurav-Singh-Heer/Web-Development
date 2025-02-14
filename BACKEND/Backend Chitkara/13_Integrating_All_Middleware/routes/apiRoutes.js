const express = require('express')
const fs = require('fs')
const path = require('path')

const router = express.Router()

// Path to users.json file
const usersFilePath = path.join(__dirname, '../users.json')

// Helper function to read existing users
const readUsers = () => {
    if (!fs.existsSync(usersFilePath)) return []
    const data = fs.readFileSync(usersFilePath)
    return JSON.parse(data)
}

// Helper function to save users
const saveUsers = (users) => {
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2))
}

// Route handler for GET /api
router.get('/', (req, res) => {
    res.json({ message: 'Welcome to the API' })
})

// Route handler for GET /api/greet/:name
router.get('/greet/:name', (req, res) => {
    const name = req.params.name
    res.json({ message: `Hello, ${name}` })
})

// Route handler for POST /api/echo (echoes the posted data)
router.post('/echo', (req, res) => {
    const data = req.body
    res.json({ message: 'Here is your data', data })
})

// Route handler for GET /api/random (returns a random number)
router.get('/random', (req, res) => {
    const randomNumber = Math.floor(Math.random() * 100) + 1
    res.json({ randomNumber })
})

// Route handler for POST /api/save (saves user data to users.json)
router.post('/save', (req, res) => {
    const { name, email } = req.body

    if (!name || !email) {
        return res.status(400).json({ error: 'Name and Email are required!' })
    }

    const users = readUsers()
    users.push({ name, email })
    saveUsers(users)

    res.json({ message: 'User saved successfully', users })
})

module.exports = router
