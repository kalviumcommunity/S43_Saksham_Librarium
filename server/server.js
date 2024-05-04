const express = require("express")
const auth = require("./Routes/auth")
require("dotenv").config()

app.use(cors())
app.use(express.json())
app.use("/auth", auth)



