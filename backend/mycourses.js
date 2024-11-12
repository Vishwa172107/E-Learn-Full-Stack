// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  const mongo_string = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/E-Learn'
  await mongoose.connect(mongo_string);
//mongodb+srv://vishwabadrinadhpadala:uCbtIMc81EViRgYS@cluster0.ekccv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
}


const mycourseSchema = new mongoose.Schema({
    name: String,
    img: String,
    price: String,
  });
  
  const mycourse = mongoose.model('mycourse', mycourseSchema);
  
  module.exports = mycourse;