const express = require('express');
const app = express();
const path = require("path");


app.use(express.static('public'));
app.use(express.static('buber.css'));


app.get('/', function (req, res){
	res.sendFile(path.resolve('./public/services.html'));

})





app.listen(3000, function () {
  console.log('Example app listening on port 3000! <br> hoi hoi')
})

