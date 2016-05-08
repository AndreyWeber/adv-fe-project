var express = require('express');
var path = require('path');

var app = express();

app.use('/', express.static(path.join(__dirname, 'client_src')));

app.listen(process.env.npm_package_config_port, function() {
    console.log("Application 'adv-fe-project' started");
});
