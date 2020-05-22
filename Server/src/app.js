// creating enviroment variable to store our packages 
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const morgan = require("morgan")

const app = express()
// body-parser allows you to process json data easily
app.use(bodyParser.json())
// print logs in a certain way
app.use(morgan("combined"))
// managing servers and their accessibility, enabling it may causes security issues 
app.use(cors())


// create and end-point 
app.post("/register", (req , res) =>{
   res.send({
       message: ` ${req.body.email} was registred successfully`
   })
})



app.listen(process.env.PORT || 8081)
