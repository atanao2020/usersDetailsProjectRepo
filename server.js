const express      = require('express'),
      app          = express(),
      mongoose     = require('mongoose'),
      port         = 2020,
      User         =  require("./models/Users")

//========================= MongooseDB Connection
mongoose.connect('mongodb+srv://atanao:dontinon@cluster0.enweg.mongodb.net/UsersDB?retryWrites=true&w=majority', 
{useNewUrlParser:true,useUnifiedTopology:true},
    function(err,database){
        if(err){
           throw err
        }
        console.log("Connection made to database successfully")
   }
)

app.use(express.urlencoded({ extended: true }))
app.set("view engine","ejs")

//============root route to go to the index.ejs
app.get('/', (req, res) =>{
    res.render("index")
})

//==================posting user details from the form to the database
app.post('/user-details', function(req, res) {
    console.log("Book POST route hit")
    console.log(req.body)
    var firstName = req.body.firstName
    var lastName = req.body.lastName
    var age = req.body.age
    var dateOfBirth = req.body.dateOfBirth
    
    User.create({
        firstName: firstName,
        lastName:lastName,
        age: age,
        dateOfBirth: dateOfBirth
    })
    .then(function(user){
        console.log('User Details Saved')
        console.log(user)
    })
    .catch(function(err){
        console.log(err)
    })
})

//=================calling the port which the server is running on
app.listen(port,()=>{
    console.log(`Server running on http://localhost:${port}`)
})