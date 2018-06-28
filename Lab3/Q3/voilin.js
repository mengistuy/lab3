var e=require('events')
emitter=e.EventEmitter;
const voilin=function()
{
  var em=new emitter();
    setInterval(function()
    {

        em.emit("note");
    },1000)
return em;
}
module.exports=voilin();

// var note=voilin();
// note.on('note',function(){
//     console.log("Voilin is palying")
// })
// note.emit()