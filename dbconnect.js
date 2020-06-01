const mongoose = require('mongoose');

dbconnect = async () => {
    await mongoose.connect('mongodb+srv://ankit123:ankit123@cluster0-ldaxh.mongodb.net/remotedb?retryWrites=true&w=majority',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(res => console.log("DB connected...."))
        .catch(err => console.log("connection Error ", err))
}

module.exports = dbconnect;