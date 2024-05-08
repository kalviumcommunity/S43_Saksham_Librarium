const express = require("express")
const auth = require("./Routes/auth")

app.use(express.json())
app.use("/auth", auth)

app.listen(process.env.PORT, () =>{
    console.log(`Now running on port ${process.env.PORT}`)
})

app.get("/", (req ,res) => {
    res.send("Hi am working")
})