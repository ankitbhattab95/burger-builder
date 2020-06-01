const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 4000;
const dbconnect = require('./ODM/dbconnect');
const Person = require('./ODM/models/person')


//to save data to DB
app.get('/test', (req, res) => {
    person = new Person({
        name: 'ankit',
        age: "24"
    });

    person.save().then(res => console.log(res))
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

app.listen(port, async () => {
    await dbconnect();
    console.log(`App listening on port ${port}`)
})


