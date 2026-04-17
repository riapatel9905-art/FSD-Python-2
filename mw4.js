/*Write an ExpressJS to take a UserName, Password, Textarea for “message” & submit 
button using get method.
1) After clicking submit button the content of submitted details should be represented 
on “/login” page along with one “show vowel” link.
2) By clicking “show vowel” link count of vowel used in submitted “message” will display on “/message” page.
(Use next() to route page)*/
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

let userData = {};

// Home - Show form
app.get('/', (req, res) => {
  res.send(`
    <h1>Login Form</h1>
    <form action="/login" method="GET">
      <input type="text" name="userName" placeholder="Username" required>
      <input type="password" name="password" placeholder="Password" required>
      <textarea name="message" placeholder="Message" required></textarea>
      <button type="submit">Submit</button>
    </form>
  `);
});

// Login page
app.get('/login', (req, res) => {
  userData = {
    userName: req.query.userName,
    password: req.query.password,
    message: req.query.message
  };

  res.send(`
    <h1>Login Successful</h1>
    <p>Username: ${userData.userName}</p>
    <p>Password: ${userData.password}</p>
    <p>Message: ${userData.message}</p>
    <a href="/message">Show Vowels</a>
    <a href="/">Back</a>
  `);
});

// Message page
app.get('/message', (req, res) => {
  const message = userData.message;
  const vowels = message.match(/[aeiouAEIOU]/g) || [].length;
  
  res.send(`
    <h1>Vowel Count</h1>
    <p>Message: ${message}</p>
    <p>Total Vowels: ${vowels.length}</p>
    <p>Vowels: ${vowels.join(', ')}</p>
    <a href="/login">Back to Login</a>
    <a href="/">Home</a>
  `);
});

app.listen(3000, () => console.log('Running on http://localhost:3000'));
