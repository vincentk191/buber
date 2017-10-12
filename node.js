const express = require('express')
const app = express();

const path = require('path');

app.use(express.static(path.join(__dirname + '/public/css')));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',function(request,response){
	response.sendFile(path.resolve('/public/home.html'));

});

app.get('/home.html',function(request,response){
	response.sendFile(path.resolve('/public/home.html'));

});

app.get('/contactUs.html',function(request,response){
	response.sendFile(path.resolve('/public/contactUs.html'));

});

app.get('/about.html',function(request,response){
	response.sendFile(path.resolve('/public/about.html'));

});

app.get('/services.html',function(request,response){
	response.sendFile(path.resolve('/public/services.html'));

});

var server = app.listen(3000);
console.log(__dirname);
