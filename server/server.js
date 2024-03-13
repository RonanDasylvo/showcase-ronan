const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;
let cors = require('cors')
app.use(cors());
app.use(express.json());

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Hallo wereld!");
});

//#nodemail (mailtrap)

"use strict";
const nodemailer = require("nodemailer");

// mailtrap > testmail
const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "",
        pass: ""
    }
});

app.post('/form', (req, res) => {

    //#nodemailer

    // async..await is not allowed in global scope, must use a wrapper
    async function main() {
        const mailOptions = await transporter.sendMail({
            from: '"[naam field]" <[email field]>',
            to: 'info@showcase-ronan.pages.dev',
            subject: '[subject field]',
            text: '[contents field]',
        });
    }
    
    main().catch(console.error);

    //#nodemailer end

    // console.log(req.body);

    // let email = req.body.email;

    // res.json({ email: email });
});

app.listen(port, () => console.log(`Data API listening on port ${port}!`))



