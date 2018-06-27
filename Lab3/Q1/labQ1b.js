const {promisify}=require('util')

var dns=require('dns');
const promisifyed=promisify(dns.lookup)
promisifyed('www.mum.edu').then(obj=>console.log(obj.address))
