const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const router = require("./contact.routing");
const hbs = require("./contact.handlebars");
const listRouter = require('./routers/list.router');
const models = require('./models/models');

app.use(express.static('public'));

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use('/lists', listRouter);
app.use("/", router);

models.createTables( (err) => {
    if (err) {
        console.log('Could not create tables and initialize the server. Error: ' + err);
    }
    else {
        app.listen(3000, function() {
            console.log("Running on http://localhost:3000");
        });    
    }
});

