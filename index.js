const express = require('express');
const app = express()

// app.listen(3000, () => {
//     console.log("Listen 3000!")
// })
app.listen(8080, () => {
    console.log("Listen 8080!!~~")
})

app.get('/', (req, res) => {
    res.send('this is homepage')
})

app.get('/r/:subreddit', (req, res) => {
    let {subreddit} = req.params;
    res.send(`<h1>browsing the ${subreddit} subreddit</h1>`);
})

app.get('/r/:subreddit/:happyCake', (req, res) => {
    let {subreddit, happyCake} = req.params;
    res.send(`<h1>browsing happyCake is ${happyCake} and the ${subreddit} subreddit</h1>`);
})

// app.use((req, res) =>{
//     console.log("you got the request!");
//     res.send('we got your request, and this is response about your request!')
// })

app.get('/cat', (req, res) => {
    console.log('cat request!');
    res.send('MEOW!')
})

app.post('/cat', (req, res) => {
    console.log('cat request! from POST');
    res.send('MEOW! FORM POST')
})

//쿼리작업
app.get('/search', (req, res) => {
    let q = req.query;
    if(!q){
        res.send('nothing founded')
    }
    res.send(`search result is ${q}`)
})

// app.get('*', (req, res) => {
//     console.log('40404044! from gET');
//     res.send('4040404040404 from gET')
// })
// app.post('*', (req, res) => {
//     console.log('40404044! from POST');
//     res.send('4040404040404 from post')
// })