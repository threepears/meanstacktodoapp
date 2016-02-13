"use strict";

const express = require('express');
const app = express();
const defaultPort = 3000;

const PORT = process.env.PORT || defaultPort;

app.all('/*', (req, res) => {
  res.send('\
		<!DOCTYPE html/>\
		<html>\
			<head>\
				<title>MEAN ToDo App</title>\
			</head>\
			<body>\
				<h1>Hello, this is the app</h1>\
				<script src="bundle.js"></script>\
			</body>\
		</html>\
	');
});

app.listen(PORT, () => {
	console.log("Server running on port " + PORT);
});
