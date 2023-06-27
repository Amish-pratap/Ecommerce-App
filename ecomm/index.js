const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const app = express();

const usersRepo = require('./repositories/users');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({
    keys: ['aldkjffaljfajafldjf']
}))

app.get('/', (req, res) => {
    res.send(`
        <div>
            <form method="POST">
                <input name="email" placeholder="email" />
                <input name="password" placeholder="password"/>
                <input name="passwordConfirmation" placeholder="password Confirntion"/>
                <button>Sign Up</button>
            </form>
        </div>
    `);
});

//middleware
app.post('/', async (req, res) => {
    const { email, password, passwordConfirmation } = req.body;
    const existingUser = await usersRepo.getOneBy({ email });
    if (existingUser) {
        return res.send('Email in use');
    }
    if (password !== passwordConfirmation) {
        return res.send('password does not match');
    }
    const user=await usersRepo.create({email, password});



    res.send('Account created');
})
app.listen(3000, () => {
    console.log('Listening');
}) 