// Dependency 
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Database connection
mongoose.connect('mongodb://amrita:amrita@amrita-shard-00-00-cfiak.mongodb.net:27017,amrita-shard-00-01-cfiak.mongodb.net:27017,amrita-shard-00-02-cfiak.mongodb.net:27017/test?ssl=true&replicaSet=amrita-shard-0&authSource=admin&retryWrites=true',{
  useMongoClient : true
})
// Online Database 
// mongoose.connect('mongodb://anto:abcd1234@ds032887.mlab.com:32887/helllooo');

// User defines routes
const RegisterRoute = require(path.join(__dirname, 'routes', 'register'));
const LoginRoute = require(path.join(__dirname, 'routes', 'login'));
const IndexRoute = require(path.join(__dirname, 'routes', 'index'));
const EntryRoute = require(path.join(__dirname, 'routes', 'entry'));
const CustRoute = require(path.join(__dirname, 'routes', 'custlogin'));
const GstRoute = require(path.join(__dirname, 'routes', 'gstest'));
const CompDetailsRoute = require(path.join(__dirname, 'routes', 'companyDetails'));
const EwayRoute = require(path.join(__dirname, 'routes', 'ewayBill'));
const IndusLogRoute = require(path.join(__dirname, 'routes', 'industry-Login'));
const IndusRegRoute = require(path.join(__dirname, 'routes', 'industry-reg'));
const LogoutRoute = require(path.join(__dirname, 'routes', 'logout'));
const ClearRoute = require(path.join(__dirname, 'routes', 'clear'));

// Config
let app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));

// Routes
app.use(RegisterRoute);
app.use(LoginRoute);
app.use(IndexRoute);
app.use(EntryRoute);
app.use(CustRoute);
app.use(GstRoute);
app.use(CompDetailsRoute);
app.use(EwayRoute);
app.use(IndusLogRoute);
app.use(LogoutRoute);
app.use(ClearRoute);



// Server running in PORT : 3000
app.listen(PORT, () => {
  console.log(`Server running in PORT : ${ PORT }`);
});