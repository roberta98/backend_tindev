const { Schema, model } = require('mongoose') //Desestruturação => Modo mais simples de importar dependencias de dentro um objeto

const DevSchema = new Schema({
    name:{
        type : String,
        required: true
    },
    user:{
        type: String,
        required : true
    },
    bio: String,
    avatar:{
        type: String, 
        required: true
    },
    likes:[{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }],
    dislikes:[{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }],
},{
    timestamps:true 
    //Cria uma coluna automatica chamada createAt (em cada resistro que for salvo no banco) e uma updateAt que salva a data de criação e a data de update 
    //
})

module.exports = model('Dev', DevSchema);