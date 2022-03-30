// Import Package
const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');

const config = require('./config');
var http = require('http');

function isEmpty(text){
    return text=="";
}

// Set Package
const app = express();
app.use(express.static('public'));

app.engine('handlebars', exphbs({
    extname: "handlebars",
    defaultLayout: false,
    layoutsDir: "views/"
  }));
app.set('view engine', 'handlebars');
app.disable("x-powered-by");
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Server Start Notification
// app.listen(3000, () => console.log("Server Started..."));

// Set Static Folder Path
app.use('/public', express.static(path.join(__dirname, 'public')));

// Get Index Page Request
app.get ('/', (req, res) => {
    res.render(config.theme);
});

// Post Email Request
app.post('/send', (req, res) => {
        var emailText=req.body.email;
        var nameText=req.body.name;
        var msgText=req.body.message;

        var type='warning';
        var msg="None";
        
        if(isEmpty(nameText) && isEmpty(emailText) && isEmpty(msgText)) {
            msg="All Input Field Are Empty";    
        }else if(!emailText.includes("@")){
            msg="Email is Invalid";
        }
        else{
           type="success";
           msg="Form Submitted"; 
        }

        const Alert =`
        <div class="alert alert-`+type+` alert-dismissible fade show" role="alert">
                <span class="msg" id="demo">`+msg+`</span>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                </button>
        </div>`;
        res.render(config.theme, {msg:Alert});
  
});
module.exports = app;
if(!module.parent){
    app.listen(9999, () =>
      console.log(`Server Started!`),
    );
  }
