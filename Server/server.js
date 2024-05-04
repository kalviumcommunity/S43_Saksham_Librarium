const express = require("express")
const auth = require("../Routes/auth")

app.use(express.json())
app.use("/auth", auth)