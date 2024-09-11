const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Data
const firstName = "Chelsea Faye";
const lastName = "Dotillos";
const age = "21";
const schoolEmail = "chno.dotillos.swu@phinmaed.com";

// Routes
app.get('/', (req, res) => {
    res.send("TESTING LANG");
});

app.get('/firstname', (req, res) => {
    res.send(firstName.toUpperCase());
});

app.get('/lastname', (req, res) => {
    res.send(lastName.toUpperCase());
});

app.get('/age', (req, res) => {
    res.send(age.toString());
});

app.get('/schoolemail', (req, res) => {
    res.send(schoolEmail);
});

app.get('/mydata', (req, res) => {
    res.json({
        first_name: firstName.toUpperCase(),
        last_name: lastName.toUpperCase(),
        age: age,
        school_email: schoolEmail
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
