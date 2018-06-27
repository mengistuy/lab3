var dns=require('dns');
var myLookup=dns.lookup('www.mum.edu',function(error,address,family){
    console.log(address);
});