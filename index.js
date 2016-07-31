var express   = require('express'),
bodyParser    = require('body-parser'),
cors         = require('cors'),
mongoose     = require('mongoose');

var tripCtrl = require('./controllers/tripCtrl'),
userCtrl     = require('./controllers/userCtrl'),
config       = require('./config/config.js');

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + '/public'));

app.post('/trip', tripCtrl.create);
app.get('/trip', tripCtrl.read);
app.put('/trip/:id', tripCtrl.update);
app.delete('/trip/:id', tripCtrl.delete);

app.post('/user', userCtrl.create);
app.get('/user', userCtrl.read);
app.put('/user/:id', userCtrl.update);
app.delete('/user/:id', userCtrl.delete);

var mongoUri = "mongodb://localhost:27017/clymbon";
mongoose.connect(mongoUri);
mongoose.connection.on('error', console.error.bind(console, 'connection error'));
mongoose.connection.once('open', function(){
  console.log("Connected to mongoDB");
});

app.listen(config.port, function(){
  console.log("listening to " + config.port);
});
