import express from 'express'
import 'dotenv/config'

const PORT = process.env.PORT || 8080

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))



app.listen(PORT, () =>{console.log("Server is runing");})