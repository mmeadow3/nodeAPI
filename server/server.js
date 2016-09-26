"use strict";

const express = require('express');

const app = express()

const port = process.env.PORT || 6060
// app.set("port", port)  // technically do not need
/////////middle wares////////////
app.use(express.static('../client')) ////////telling to host files from the client folder
/////////////////////////////////////
app.listen(port, () =>
  console.log(`listening on port ${port}`)
)
