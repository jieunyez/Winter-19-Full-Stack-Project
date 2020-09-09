var http = require('http');
var fs = require('fs');
var options = {
    host: 'localhost',
    port: '8000',
    path: '/index.html'  
 };


var callback = function(response) {
    var body= '';
    response.on('data', function(data){
        body +=data;
    });
    response.on('end', function(){
        console.log(body);
        fs.writeFile('request.txt',body, (err) => {
            if (err) throw err;
          });
    });
    
}

var req= http.request(options, callback);
req.end();
