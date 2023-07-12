const express = require('express');
const app = express()

// app.listen(3000, () => {
//     console.log("Listen 3000!")
// })
app.listen(8080, () => {
    console.log("Listen 8080!")
})

app.use(() =>{
    console.log("you got the request!");
})