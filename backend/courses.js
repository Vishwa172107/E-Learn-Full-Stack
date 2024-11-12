const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {

  const mongo_string = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/E-Learn"
  await mongoose.connect(mongo_string);

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}





const courseSchema = new mongoose.Schema({
  name: String,
  img: String,
  description: String,
  price: String,
  
});
const course = mongoose.model("course", courseSchema);

course.insertMany([
  { name: 'Introduction to Python Programming', img: 'https://i.pinimg.com/564x/1d/8e/7b/1d8e7b059e313fc47711d030472f1291.jpg', description: 'Beginner-level course to learn Python programming.', price: `₹${(Math.random() * 5000 + 500).toFixed(2)} ` },
  { name: 'Digital Marketing Essentials', img: 'https://etimg.etb2bimg.com/photo/89866384.cms', price: `₹${(Math.random() * 5000 + 500).toFixed(2)} ` },
  { name: 'Data Science with R', img: 'https://i.pinimg.com/736x/68/7c/9c/687c9cba3b70adf0da06a1e366fa6186.jpg', description: 'Intermediate course to master data analysis with R programming.', price: `₹${(Math.random() * 5000 + 500).toFixed(2)} ` },
  { name: 'Graphic Design Fundamentals', img: 'https://i.pinimg.com/564x/b6/22/dd/b622dd956ac993b293a6e678e27720fd.jpg', price: `₹${(Math.random() * 5000 + 500).toFixed(2)} ` },
  { name: 'Project Management Basics', img: 'https://i.pinimg.com/736x/7b/c2/0b/7bc20b365210fd6e3866a1584ba4d487.jpg', description: 'Introduction to project management methodologies and best practices.', price: `₹${(Math.random() * 5000 + 500).toFixed(2)} ` },
  { name: 'Web Development with JavaScript', img: 'https://i.pinimg.com/564x/31/e5/e7/31e5e78bb87da10be3355772e7e6d4df.jpg', description: 'Learn how to create interactive websites with JavaScript.', price: `₹${(Math.random() * 5000 + 500).toFixed(2)} ` },
  { name: 'Introduction to Machine Learning', img: 'https://i.pinimg.com/736x/6e/44/0e/6e440ee68845fae8689fdde266dd68a1.jpg', description: 'Beginner-friendly course to learn machine learning fundamentals.', price: `₹${(Math.random() * 5000 + 500).toFixed(2)} ` },
  { name: 'Advanced Excel for Data Analysis', img: 'https://i.pinimg.com/736x/aa/b8/26/aab826af316a661ca4ebcc279b759c88.jpg', description: 'Master advanced Excel features for data analysis.', price: `₹${(Math.random() * 5000 + 500).toFixed(2)} ` },
  { name: 'Basics of Cybersecurity', img: 'https://i.pinimg.com/736x/4d/a4/44/4da4441108a5238b1d18206cac2ebbe8.jpg', description: 'Learn about cybersecurity basics to protect information.', price: `₹${(Math.random() * 5000 + 500).toFixed(2)} ` },
  { name: 'Social Media Marketing', img: 'https://i.pinimg.com/564x/8e/1b/89/8e1b89db408243e8f29abf9718213b04.jpg', description: 'Understand how to leverage social media for business.', price: `₹${(Math.random() * 5000 + 500).toFixed(2)} ` }
]);

module.exports = course;
