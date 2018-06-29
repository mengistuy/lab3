const EventEmitter=require('events')

class Voilin extends EventEmitter
{
    voilin()
    {
        setInterval(()=>
        {   
            this.emit("note");
        },1000)
    return this;
    }
   
}
 module.exports=Voilin;