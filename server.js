const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 4000;
app.get('/test', (req, res) =>{
    console.log('hiiiiii')
    res.send('Hello World!')
}) 

//Static file declaration
app.use(express.static(path.join(__dirname, 'burger-builder/build')));

//production mode
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'burger-builder/build')));
    app.get('*', (req, res) => {
        res.sendfile(path.join(__dirname = 'burger-builder/build/index.html'));
    })
}

//build mode
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/burger-builder/public/index.html'));
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))


