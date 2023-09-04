const express = require("express");
const app = express();
const mongoose = require('mongoose');
const cors = require("cors");
 const path = require("path");
const dotenv = require("dotenv");
dotenv.config();



//to connet 2 diff server
app.use(cors())
// make connection, *** Change IP netwrok everytime in Mngo-Atlas
//const db = 'mongodb+srv://sajeed:sajeed123@cluster0.ivnebch.mongodb.net/?retryWrites=true&w=majority'

//static files
// app.use(express.static(path.join(__dirname,'./frontend/build')))
// app.get('*/',function(req,res){
//   res.sendFile(path.join(__dirname,'./frontend/build/index.html'))
// })

//connection code
mongoose.connect(process.env.URI).then(() => {
    console.log('connection successful');
    app.listen(process.env.PORT || 5000, (err) => {
        if (err) console.log(err);
        console.log(`running at port ${process.env.PORT}`);
    });
}).catch((err) => console.log(err, 'no connection'));

 
app.use(express.json());
const User = require('./models/userDataModel');

/**********app.use is imp */
const User1 = require('./routes/userDataRoute');
app.use(User1)


// app.listen(4000);
