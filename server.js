"use strict"

var express = require('express'),
  hbs = require('hbs');

var app = express();
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(express.logger());

app.get('/', function(req, res){
  res.render('index_template', {});
});

app.get('/realtime', function(req, res){
    res.render('cubeism_template', {})
});

app.get('/own_lang', function(req, res){
  res.render('force_owned_language', {})
});

app.get('/own_lang_personal', function(req, res){
  res.render('force_owned_language_personal', {});
});

app.get('/star_lang', function(req, res){
  res.render('force_starred_language', {})
});

app.get('/star_lang_personal', function(req, res){
  res.render('force_starred_language_personal', {})
});

app.get('/star_repo', function(req, res){
  res.render('force_starred_repos', {});
});

app.get('/star_repo_personal', function(req, res){
    res.render('force_starred_repos_personal', {})
})
var port = process.env.PORT || 5000;


app.listen(port, function() {
  console.log("listening on " + port);
})
