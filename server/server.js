"use strict";

const express = require('express');
const mongoose = require('mongoose');

const MONGODB_URL = process.env.MONGODB_URL || "mongodb://localhost:27017/meanChat"
const app = express()

const port = process.env.PORT || 6060
// app.set("port", port)  // technically do not need
/////////middle wares////////////
app.use(express.static('../client')) ////////telling to host files from the client folder
/////////////////////////////////////
app.get('/api/title', (req, res) =>
  res.send({title: "Hello from the mean MEAN stack"})
)

const Message = mongoose.model("message", {
  author: String,
  content: String
})

app.get('/api/messages', (req, res, err) =>
  Message
  .find()
  .then(messages =>
    res.json({messages})
  )
  .catch(err)
)

mongoose.Promise = Promise

mongoose.connect(MONGODB_URL, () =>
app.listen(port, () =>
  console.log(`listening on port ${port}`)
  )
)
