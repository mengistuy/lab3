const voilin=require('./voilin')
var note=voilin;
note.on('note',function(){
    console.log("Voilin is palying")
})
note.emit()