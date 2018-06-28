var http=require('http')
var fs=require('fs')

const rt=http.createServer(function(request,response)
{
    //image_Size~100 mb
   var myImage=fs.readFileSync(__dirname + '/lijiang_old_town_2012.jpg');
    response.writeHead(200,{"Content-Type":"image/jpg"});
    response.end(myImage)
}).listen(144,'127.0.0.1');
console.log("Server is running on port number 144 and ip address 127.0.0.1")

/*The first time the loading time was arround 5ms, it was fairly fast 
The loading time decreased to 0.2ms when I keep request
*/