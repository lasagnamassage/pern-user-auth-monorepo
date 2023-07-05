const express = require('express')
const bcrypt = require('bcrypt')
const cors = require('cors')

const User = require('./user')

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send("Hello")
})

app.post('/signup', async (req, res) => {
    let existingUser = await User.findByEmail(req.body.email)
    if (existingUser.length > 0) {
        res.sendStatus(403)
        return;
    }
    let hashedPassword = await bcrypt.hash(req.body.password, 3)
    await User.add({email: req.body.email, password: hashedPassword, firstname: req.body.firstname, lastname: req.body.lastname})
    res.sendStatus(200)
})

app.post('/login', async (req, res) => {

    let user = await User.findByEmail(req.body?.email)
    if (!user)
        res.send({ error: 'invalid email'})
    let validPassword = await bcrypt.compare(req.body.password, user.password)
    if (validPassword) {
        // send auth token + user data
        let token = User.generateAuthToken(user)
        res.send({token})
    } else {
        res.send({ error: 'invalid password'})
    }
})

app.post('/profile', async (req, res) => {
    let token = req.body.token;
    console.log(req.body.token)
    if (token) {
        let userInfo = User.verifyToken(token)
        res.send(userInfo)
    }
    else {
        res.send({ error: 'no token received'})
    }
})

app.listen(3001, () => {
    console.log('server hosted on 3001')
})
