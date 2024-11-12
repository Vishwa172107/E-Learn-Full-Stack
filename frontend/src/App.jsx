import React, { useEffect, useState } from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CourseSection from './CourseSection';
import NavbarComponent from './NavbarComponent';

const App = () => {
  const [courses, setcourses] = useState([]);

  // Fetch vegetables data from the backend API
  useEffect(() => {
    fetch('http://localhost:5000/api/courses')
      .then(response => response.json())
      .then(data => setcourses(data))
      .catch(error => console.error('Error fetching coursees:', error));
  }, []);

  return (
    <>
      <NavbarComponent />

      <Container
        fluid
        id="home-section"
        className="d-flex flex-column justify-content-center align-items-center min-vh-100 text-center mt-5 pt-5"
      >
        <h1 className="my-4">Welcome to E-Learn</h1>
        <p>Discover the Quality Courses with detailed content.</p>
      </Container>

      {/* Pass fetched fruits and vegetables data to sections */}
      <CourseSection courses={courses}/>

      <footer className="text-center mt-5">
        <p>&copy; All rights reserved.</p>
      </footer>
    </>
  );
};

export default App;
