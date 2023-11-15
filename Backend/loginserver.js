const express = require("express");
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "userdatas"
})

app.post('/userdatas', (req,res)=> {
    const sql = "INSERT INTO mydata (`name`,`email`,`password`)VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ]
    db.query(sql, [values],(err, data) => {
        if(err){
            console.error('Error connecting to database:', err);
            return res.status(500).json("Internal Server Error");
        }
        return res.json(data);
    })
})

app.listen(8080,()=>{
    console.log("listening")
})