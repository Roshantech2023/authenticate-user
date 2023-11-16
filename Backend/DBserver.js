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

app.get('/',(req, res) => {
    const sql = "SELECT * FROM crud";
    db.query(sql, (err, result)=>{
        if(err) return res.json({message:"Error inside server"});
        return res.json(result);
    })
})

app.post('/crud', (req, res)=> {
    const sql = "INSERT INTO crud (`name`,`DOB`,`contact`,`altercontact`,`location`,`language`,`designation`,`Gender`)VALUES(?)";
    const values = [
        req.body.name,
        req.body.DOB,
        req.body.contact,
        req.body.altercontact,
        req.body.location,
        req.body.language,
        req.body.designation,
        req.body.Gender
    ]
    db.query(sql, [values], (err, result) => {
        if(err) return res.json(err);
        return res.json(result);
    })
})

app.listen(8081,()=>{
    console.log("listening")
})