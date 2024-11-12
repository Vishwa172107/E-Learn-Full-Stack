const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path =require('path')


const Mycourses = require('./backend/mycourses');
const Courses = require('./backend/courses');

const app = express();
const port = 5000;

// Middleware
app.use(cors({ origin: 'http://localhost:5173' })); // Allow requests from the React frontend
app.use(express.json()); // Parse JSON requests
app.use(express.urlencoded({ extended: true })); // Parse form submissions
app.set('view engine', 'ejs'); // Set EJS as templating engine
app.set('views', path.join(__dirname, 'views')); // Set views directory

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/E-Learn', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));


// Fetch all vegetables
app.get('/api/courses', async (req, res) => {
  try {
    const courses = await Courses.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching courses' });
  }
});

// Add item to cart
app.post('/api/add-to-mycourses', async (req, res) => {
  const { name, img, price } = req.body;

  try {
    // Check if item is already in the cart
    let cartItem = await Courses.findOne({ name });
    cartItem = new Mycourses({ name, img, price });
      await cartItem.save();
    res.status(201).json({ message: 'Item added to cart', cartItem });
  } catch (error) {
    res.status(500).json({ error: 'Error adding item to cart' });
  }
});

// Render cart page with items
app.get('/mycourses', async (req, res) => {
  try {
    const mycourses = await Mycourses.find();
    res.render('cart.ejs', { mycourses });
    
  } catch (error) {
    res.status(500).send('Error loading cart');
  }
});

// Delete item from cart
app.get('/delete-mycourse-item/:id', async (req, res) => {
  try {
    await Mycourses.findByIdAndDelete(req.params.id);
    res.redirect('/mycourses');
  } catch (error) {
    res.status(500).send('Error deleting course from cart');
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
