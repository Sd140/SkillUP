// const mongoose = require('mongoose')
// // const db = 'mongodb+srv://sd1407:sakshi123@cluster0.yaspjvn.mongodb.net/skillup?retryWrites=true&w=majority'

// mongoose.connect("mongodb://localhost:27017/skillup",{
//     useNewUrlParser:true,
//     useUnifiedTopology:true,
//     useCreateIndex:true
// }).then(()=> {
//     console.log(`connection established`);
//   }).catch((err)=>console.log(`no connection`));

const mongoose = require('mongoose')
const db = 'mongodb+srv://sd1407:sakshi123@cluster0.yaspjvn.mongodb.net/skillup?retryWrites=true&w=majority'

mongoose.connect(db).then(()=> {
    console.log(`connection established`);
  }).catch((err)=>console.log(`no connection`));









