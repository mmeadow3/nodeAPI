"use strict";

const express = require('express');

const app = express()

const port = process.env.PORT || 6060
// app.set("port", port)  // technically do not need
/////////middle wares////////////
app.use(express.static('../client')) ////////telling to host files from the client folder
/////////////////////////////////////
app.get('/api/title', (req, res) =>
  res.send({title: "Hello from the mean MEAN stack"})
)
app.get('/api/messages', (req, res) =>
  res.json({
    messages: [
      {
        author: 'John',
        content: 'Get a Job!',
      },
      {
        author: 'Scott',
        content: 'Node is Awesome!',
      },
    ],
  })
)


app.listen(port, () =>
  console.log(`listening on port ${port}`)
)
