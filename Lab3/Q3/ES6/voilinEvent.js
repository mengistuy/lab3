const voilin=require('./voilin')
var voilinEvent=new voilin();
voilinEvent.on('note',function()
{
    console.log("Playing");
});

//voilinEvent.emit('note');
voilinEvent.voilin();