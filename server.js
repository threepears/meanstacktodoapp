"use strict";

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('server/routes');
const defaultPort = 3000;

const PORT = process.env.PORT || defaultPort;

app.use(bodyParser.json());

routes(app);

app.all('/*', (req, res) => {
  res.send('\
		<!DOCTYPE html/>\
		<html>\
			<head>\
				<title>MEAN ToDo App</title>\
				<base href="/">\
			</head>\
			<body>\
				<div ui-view></div>\
				<script src="bundle.js"></script>\
			</body>\
		</html>\
	');
});

app.listen(PORT, () => {
	console.log("Server running on port " + PORT);
});
