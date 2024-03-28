const express = require('express')
const app = express();
app.get('/names', (req,res) => { 
  res. send("Tarrasque")})

app.listen(5000, () => { 
  console.log("O servidor está sendo executado na porta 5000")})
