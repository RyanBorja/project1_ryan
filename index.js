// const express = require('express')
// const path = require('path')
// const PORT = process.env.PORT || 5000
//
// express()
//   .use(express.static(path.join(__dirname, 'public')))
//   .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'ejs')
//   .get('/', (req, res) => res.render('pages/index'))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/dist'));

app.listen(port, function() {
    console.log('I am listening on port ' + port +'!');
});
