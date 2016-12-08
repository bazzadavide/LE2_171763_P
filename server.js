var express = require('express');
//general lib
var app = express();
//connect DB
var pg = require('pg');
//GET
var util = require('util');
//post
app.set('port', (process.env.PORT || 5000));

/*
*
*
*
*/

app.get('/create/', function(request, response) 
{
	var text = 'responce:';
	response.writeHead(200, {'Content-Type': 'text/html'});	
	console.log("called");
	pg.connect(process.env.DATABASE_URL, function(err, client, done) {	
		console.log("connected to db");
		//create table	
		client.query('create table pasti (pasto text)', function(err, result) {
		  done();			
		  if (err){ 
			   console.error(err); 
			   response.send("Error " + err); 
		   }
		  else{ 
			  response.end("table created");
		   }
		});
        client.query('create table utente (user text, pass text, isAdmin bool)', function(err, result) {
		  done();
			
		  if (err){ 
			   console.error(err); 
			   response.send("Error " + err); 
		   }
		  else{ 
			  response.end("table created");
		   }
		});

  	});
  	

});
/*
*
*
*
*/

app.get('/addPasto/', function(request, response) 
{
	var text = 'responce:';
	response.writeHead(200, {'Content-Type': 'text/html'});
	
	console.log("called");

	pg.connect(process.env.DATABASE_URL, function(err, client, done) {
		
		console.log("connected to db");

		//add element
		client.query('insert into pasti values (\'pasta al pomodoro\')', function(err, result) {
		  done();
		  if (err) { 
			  console.error(err); 
			  response.send("Error insert " + err); }
		  else {
			  response.end("row added");
		   }
		});
  	});

});

/*
*
*
*
*/

app.get('/addUtente', function(request, response) 
{
<<<<<<< HEAD
    var query = {text: 'insert into utenti values ($1, $2, false)',
			values: [req.body.registerUsername, req.body.registerPassword] }
=======
    var query = {text: 'insert into utente values ($1, $2, false)',
			values: [req.body.username, req.body.password] }
    
>>>>>>> dev
	var text = 'responce:';
	response.writeHead(200, {'Content-Type': 'text/html'});
	
	console.log("called");

	pg.connect(process.env.DATABASE_URL, function(err, client, done) {
		
		console.log("connected to db");

<<<<<<< HEAD
		//add element
		client.query(query, function(err, result) {
		  done();
		  if (err){ 
			  console.error(err); 
			  response.send("Error insert " + err);
          }
		  else {
			  response.end();
=======
		//aggiunge il nuovo utente 
		client.query(query, function(err, result) {
		  done();
			
		  if (err){ 
			   console.error(err); 
			   response.send("Error " + err); 
		   }
		  else{
              console.log("inserito nuovo utente nel db");
			  response.end("table created");
>>>>>>> dev
		   }
		});
        
        
  	});

});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});