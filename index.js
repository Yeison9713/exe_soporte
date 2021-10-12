const express = require("express");
const bodyParser = require("body-parser");
// const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const path = __dirname + '/Public/';

app.use(express.static(path));

app.get('/', function (req, res) {
    res.sendFile(path + "index.html");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});