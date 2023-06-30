const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const authRouter = require('./routes/admin/auth')

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    name: 'session',
    keys: ['lkasld235j'],
    maxAge: 24 * 60 * 60 * 1000, // Session duration in milliseconds
  })
);
app.use(authRouter);
app.listen(3000, () => {
  console.log('Listening');
});
