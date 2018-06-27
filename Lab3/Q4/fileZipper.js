var fs=require('fs')
var zlib=require('zlib')
var createZip=zlib.createGzip();

var filtToBeZipped=fs.createReadStream(__dirname +'/files/source.txt');
var Zipped=fs.createWriteStream(__dirname +'/files/dest.txt.gz');

filtToBeZipped.pipe(createZip).pipe(Zipped);

