const express = require('express');
const app = express();

const fs = require('fs');
app.use(express.urlencoded({extended: true}))
app.use(express.json());    
app.use(express.static(__dirname + '/public'));

//const login = fs.readFileSync(__dirname + '/public/login/login.html').toString();
//const headerPage = fs.readFileSync(__dirname + '/public/header/header.html').toString();
//const footerPage = fs.readFileSync(__dirname + '/public/footer/footer.html').toString();

const templateRootPage = fs.readFileSync(__dirname + '/public/templateroot/templateroot.html').toString();
const navigationPage = fs.readFileSync(__dirname + '/public/navigation/navigation.html').toString();
const loginPage = fs.readFileSync(__dirname + '/public/login/login.html').toString();
const homePage = fs.readFileSync(__dirname + '/public/home/home.html').toString();
const aboutPage = fs.readFileSync(__dirname + '/public/about/about.html').toString();
const registerPage = fs.readFileSync(__dirname + '/public/register/register.html').toString();

app.get("/", (req, res) => {
    return res.send(templateRootPage);
});

app.get("/navigation", (req, res) => {
    return res.send(navigationPage);
});

app.get("/login", (req, res) => {
    return res.send(loginPage)
});

app.get('/home', (req, res) => {
    return res.send(homePage);
})

app.get('/about', (req, res) => {
    return res.send(aboutPage);
})

app.get('/register', (req, res) => {
    return res.send(registerPage);
})

app.get('/*', (req, res) => {
    return res.redirect('/');
});


app.listen(8080);