const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.send("Hello World! and welcome to my-app, it's awesome app@@@!!!");
});

app.get("/info", (req, res) => {
	res.send("Hello this is my-app info api @@@!!!");
});

app.listen(3000, function () {
	console.log("Example my-app listening on port 3000!");
});
