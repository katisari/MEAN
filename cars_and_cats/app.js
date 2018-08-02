var http = require('http');
var fs = require('fs');
var server = http.createServer(function(request, response) {
    console.log('client request URL: ', request.url);
    if (request.url === '/cars') {
        fs.readFile('cars.html', 'utf8', function(errors, contents) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === "/cats"){
        fs.readFile('cats.html', 'utf8', function(errors, contents) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === "/cars/new") {
        fs.readFile('cars_new.html', 'utf8', function(errors, contents) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/images/cat1.jpg') {
        fs.readFile('./images/cat1.jpg', function(errors, contents) {
            response.writeHead(200, {'Content-Type': 'images/jpg'});
            response.write(contents);
            response.end();''
        });
    }
    else if (request.url === '/images/cat2.jpg') {
        fs.readFile('./images/cat2.jpg', function(errors, contents) {
            response.writeHead(200, {'Content-Type': 'images/jpg'});
            response.write(contents);
            response.end();''
        });
    }
    else if (request.url === '/images/cat3.jpg') {
        fs.readFile('./images/cat3.jpg', function(errors, contents) {
            response.writeHead(200, {'Content-Type': 'images/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/images/car.jpeg'){
        fs.readFile('./images/car.jpeg', function(errors, contents) {
            response.writeHead(200, {'Content-Type': 'images/jpeg'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/images/cars2.jpg'){
        fs.readFile('./images/cars2.jpg', function(errors, contents) {
            response.writeHead(200, {'Content-Type': 'images/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/images/cars3.jpg'){
        fs.readFile('./images/cars3.jpg', function(errors, contents) {
            response.writeHead(200, {'Content-Type': 'images/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/stylesheets/cat.css') {
        fs.readFile('./stylesheets/cat.css', 'utf8', function(errors, contents) {
            response.writeHead(200, {'Content-Type': 'text/css'});
            response.write(contents);
            response.end();
        });
    }
    else {
        response.writeHead(404);
        response.end('File not found!!!');
    }
});
server.listen(7077);

console.log("Running in localhost at port 7077!");