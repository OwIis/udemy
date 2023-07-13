const express = require('express');
const app = express()

// app.listen(3000, () => {
//     console.log("Listen 3000!")
// })
app.listen(8080, () => {
    console.log("Listen 8080!")
})

app.use((req, res) =>{
    console.log("you got the request!");
    res.send('we got your request, and this is response about your request!')
})