const express = require('express')
const app = express()
var cors = require('cors')
const path = require('path')
const port = process.env.PORT || 4000;
const dbconnect = require('./ODM/dbconnect');
const Person = require('./ODM/models/person')
const IngredientDetail = require('./ODM/models/ingredientDetail')
const Order = require('./ODM/models/order')
var bodyParser = require('body-parser')

app.use('*', cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });
// app.options('/confirm',(req,res,next)=>{
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// }) 

// app.get('/test', (req, res) => {
//     person = new Person({
//         name: 'ankit',
//         age: "24"
//     });

//     person.save().then(res => console.log(res))
// })

app.get('/orders', (req, res) => {
    console.log('---------/orders')
    // orders = new Order()
    Order.find({},(err,docs)=>{
        console.log(docs)
        res.send(docs)
    })
})

app.post('/confirm', (req, res) => {
    console.log('----------------/confirm')
    let data = req.body;
    console.log('data----', data)
    // { ingredients: { patty: 0, cheese: 0, salad: 1 }, amount: 10}
    let postData = {
        "order": data.ingredients,
        "amount": data.amount,
        "date": Date.now()
    }
    order = new Order(postData)
    order.save().then(res => console.log(res)).catch(e => console.log(e))
    res.status(201).send(postData)
})


app.get('/getIngredientDetails', (req, res) => {
    console.log('-------------/getIngredientDetails')
    ingredientDetails = new IngredientDetail()

    IngredientDetail.find({}, function (err, docs) {
        // console.log(docs)
        res.send(docs)
    });
})


//production mode
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'burger-builder/build')));
    app.get('*', (req, res) => {
        res.sendfile(path.join(__dirname = 'burger-builder/build/index.html'));
    })
}

//build mode
app.use(express.static(path.join(__dirname, 'burger-builder/public')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/burger-builder/public/index.html'));
})

app.listen(port, async () => {
    await dbconnect();
    console.log(`App listening on port ${port}`)
})


