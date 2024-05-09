const express = require("express")
const auth = require("./Routes/auth")
const book = require("./Routes/book")
const app = express()

app.use(express.json())
app.use("/ping/auth", auth)
app.use("/book", book)

app.listen(process.env.PORT, () =>{
    console.log(`Now running on port ${process.env.PORT}`)
})

app.get("/ping", (req ,res) => {
    res.send("Hi am working")
})