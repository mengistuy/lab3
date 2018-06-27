const {promisify}=require('util')

var dns=require('dns');
const promisifyed=promisify(dns.lookup)
async function main()
{
    try
    {
        const p=await promisifyed('www.mum.edu');
        console.log("IP Address",p.address);
    }
    catch(error)
    
    {
        console.log("Error:- " + error)
    }
}
main()
//promisifyed('www.mum.edu').then(obj=>console.log(obj.address))
