"use strict";

const express = require('express');
const mongoose = require('mongoose');
const {json}= require('body-parser');

const MONGODB_URL = process.env.MONGODB_URL || "mongodb://localhost:27017/meanChat"
const app = express()

const port = process.env.PORT || 6060
// app.set("port", port)  // technically do not need
/////////middle wares////////////
app.use(express.static('../client')) ////////telling to host files from the client folder
app.use(json())
/////////////////////////////////////
app.get('/api/title', (req, res) =>
  res.json({ title: 'MEAN Chat' })
)

const Message = mongoose.model('message', {
  author: String,
  content: String,
})

app.get('/api/messages', (req, res, err) =>
  Message
    .find()
    .then(messages => res.json({ messages }))
    .catch(err)
)

app.post('/api/messages', (req, res, err) =>
  Message
    .create(req.body)
    .then(msg => res.json(msg))
    .catch(err)
)

mongoose.Promise = Promise
mongoose.connect(MONGODB_URL, () =>
  app.listen(port, () => console.log(`Listening on port: ${port}`))
)
