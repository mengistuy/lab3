var fs=require('fs')
var zlib=require('zlib')
//var unZip=zlib.createUnzip();
var unZip=zlib.createGunzip();
var fileToBeUnZipped=fs.createReadStream(__dirname +'/files/dest.txt.gz');
var destination=fs.createWriteStream(__dirname+'/unzippedFile.txt')
fileToBeUnZipped.pipe(unZip).pipe(destination)



