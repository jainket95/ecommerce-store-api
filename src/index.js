const express = require("express");
const cors = require("cors");

const http = require("http");

const app = express();
const port = 8080;

app.use(cors());

app.use(express.json());

const server = http.createServer(app);

server.listen(port, () => {
	console.log(`Server listening on http://localhost:${port}`);
});
