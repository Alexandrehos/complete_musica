var express    = require('express'),
    bodyParser = require('body-parser'),
    mongoose   = require('mongoose');
    
var app = express();
app.set('view engine', 'ejs');

mongoose.connect("mongodb://localhost:27017/musicaIngles", {useNewUrlParser: true});
var Musica = require("./models/musica");

var seedDB = require('./seeds');
// seedDB();

app.use(express.static(__dirname + "/public"));

//Rotas:
app.get("/", function(req, res){
    Musica.find({}, function(err, todasMusicas){
        if(err){
            console.log(err);
        } else {
            res.render("landing", {musicas : todasMusicas});
        }
    });
});

app.get("/musica/:id", function(req, res){
    Musica.findById(req.params.id, function(err, musicaEscolhida){
        if(err){
            console.log('Alo');
        } else {
            res.render('musica', {musica: musicaEscolhida});
        }
    });
});



app.get("*",function(req, res){ 
    res.send("Ta errado, isso não existe :(");
});

// app.listen(process.env.PORT, process.env.IP, function () {
//     console.log("Servidor foi iniciado!!")
// });
const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
});

app.listen(port, hostname, ()=> {
    console.log(`Servidor foi iniciado em http://${hostname}:${port}/`);
});
