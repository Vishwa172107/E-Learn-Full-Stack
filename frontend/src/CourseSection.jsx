import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ItemCard from './ItemCard';
import Accordion from 'react-bootstrap/Accordion';


const CourseSection = ({ courses }) => {
  return (
    <Container fluid id="course-section" className="mt-5">
      <h2 className="my-4 text-center">Courses</h2>
      <Row className="g-4 justify-content-center">
        {courses.length > 0 ? (
          courses.map((course) => (
            <ItemCard key={course._id} item={course} />
          ))
        ) : (
          <p className="text-center">No Courses available</p>
        )}
      </Row>
    </Container>
  );
};

export default CourseSection;