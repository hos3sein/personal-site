const mongoos = require('mongoose');

const password = 'Lucifer@25255225'
const url = 'mongodb+srv://kianlucifer0098:Lucifer252552255@cluster0.2apbqjv.mongodb.net?retryWrites=true&w=majority'

const schema = mongoos.Schema

mongoos.connect(url)
    .then((resault) => console.log('server conected'))
    .catch((err) => console.log(err))

const blog = new schema({
    firstname:{
        type:String,
        require: true,
    },
    lastname:{
        type:String,
        require: true,
    },
    email:{
        type:String,
        require: true,
    },
    idea:{
        type:String,
        require: true,
    }
})

const Blog = mongoos.model('data' , blog);

module.exports = Blog;