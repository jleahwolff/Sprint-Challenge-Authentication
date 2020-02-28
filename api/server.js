const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require('../auth/authenticate-middleware.js'); // example: restricted-middleware
const authRouter = require('../auth/auth-router.js');
const jokesRouter = require('../jokes/jokes-router.js'); // example: user-router

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/jokes', authenticate, jokesRouter);

server.get("/", (req, res) => {
    res.json({ api: "SERVER IS UP" });
});

module.exports = server;
