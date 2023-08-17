// Load express
// const express = require('express')

// Create our express app
// const app = express();

// CONFIGURE THE APP

// MIDDLEWEAR

// ROUTES

// app.get('', () => { })
// app.get('/', (req, res) => {
//     res.send(`<h1> Hello World! </h1>`)
// })

// Home '/'
// app.get('/', function (req, res) { 
//     res.send('<h1> Hello Express! </h1>')
// })

// app.get('/home', function (req, res) {
//     res.send('<h1> Home Page </h1>')
// })

// app.get('/cars', function (req, res) {
//     res.send("Here's a list of my cars...");
// });

// app.post('/cars', function (req, res) {
//     res.send('Thanks for the new car!');
// });

// SERVER LISTENING

// Tell the app which port to listen to
// app.listen(3000, function () {
//     console.log('Listening on port 3000') // Inside the terminal type: node server
// })

// in the terminal type: nodemon updates the server


const express = require('express');
const app = express();
const port = 3000;

app.get('/greeting', (req, res) => {
    res.send('<h1> Hello! </h1>')
})

app.get('/:name', (req, res) => {
    // console.log(req.params);
    res.send(`<h1>${req.params.name}!<h1>`);
});

// Greeting
app.get('/greeting/:name', (req, res) => {
    res.send(`<h1> Hello ${req.params.name}!</h1>`)
})

// Define a route with parameters for total and tip percentage
app.get('/tip/:total/:tipPercentage', (req, res) => {
    const total = req.params.total;
    const tipPercentage = req.params.tipPercentage;
    const tip = (total * tipPercentage) / 100;

    res.send(`<h1>Your total is $${total} and a ${tipPercentage}% tip is $${tip}.</h1>`);
    // http://localhost:3000/tip/100/20
    // Your total is $100 and a 20% tip is $20.
});

// Define a route for the Magic 8 Ball
app.get('/magic/:question', (req, res) => {
    // Array of Magic 8 Ball responses
    const randomResponses = [
        "It is certain", "It is decidedly so", "Without a doubt", "Yes definitely",
        "You may rely on it", "As I see it yes", "Most likely", "Outlook good",
        "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later",
        "Better not tell you now", "Cannot predict now", "Concentrate and ask again",
        "Don't count on it", "My reply is no", "My sources say no",
        "Outlook not so good", "Very doubtful"
    ]
    const Response = randomResponses[Math.floor(Math.random() * randomResponses.length)]
    const question = req.params.question;
    // const Question = 'Will I Be A Millionaire?'
    res.send(`
    <h1>Your Question: ${question}?</h1>
    <h1>Magic 8 Ball Response: ${Response}!</h1>
  `)
    // http://localhost:3000/magic/:question
    // http://localhost:3000/magic/Will%20I%20Be%20A%20Millionaire
    // Your Question: Will I Be A Millionaire?
    // Magic 8 Ball Response: Don't count on it!
})

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
