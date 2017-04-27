// Main starting point of the application, basically initalization of server, without routing part
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');

// DB Setup
mongoose.connect('mongodb://localhost:auth/auth');

// App Setup, making express the way we want to work to
app.use(morgan('combined'));           //logging for debugging
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));           // parse incoming request to JSON
router(app);

// Server Setup, getting the express application to talk to the outside world
const port = process.env.PORT || 3090;
const server = http.createServer(app);        // Forward request to express app
server.listen(port);
console.log('Server listening on:', port);
