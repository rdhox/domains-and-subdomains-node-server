const express = require('express');
const path = require('path');
const vhost = require('vhost');
const app = express();

// Let initialize the app that we want to deploy
const app1 = express();
const app2 = express();
const app3 = express();
const appDashboard= express();

// Declare the static folder of applications
app1.use(express.static(path.join(__dirname, 'app1', 'build')));
app2.use(express.static(path.join(__dirname, 'app2', 'dist')));
app3.use(express.static(path.join(__dirname, 'app3', 'public')));
appDashboard.use(express.static(path.join(__dirname, 'dashboard', 'dist')));


// Return the right entry point for each application
app1.use((req, res, next) => {
    return res.sendFile(path.resolve(__dirname, 'app1', 'build', 'index.html'));
});
app2.use((req, res, next) => {
    return res.sendFile(path.resolve(__dirname, 'app2', 'dist', 'index.html'));
});
app3.use((req, res, next) => {
    return res.sendFile(path.resolve(__dirname, 'app3', 'public', 'index.html'));
});
appDashboard.use((req, res, next) => {
    return res.sendFile(path.resolve(__dirname, 'dashboard', 'dist', 'index.html'));
});

// Declare the vhost
app.use(vhost('app1.test', app1));
app.use(vhost('app2.test', app2));
app.use(vhost('app3.test', app3));
app.use(vhost('dashboard.app3.test', appDashboard));

app.listen(4000);