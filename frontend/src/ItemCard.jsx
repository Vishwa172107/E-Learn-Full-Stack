import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';

const ItemCard = ({ item }) => {
  const handleAddToCart = async () => {
    try {
      await fetch('http://localhost:5000/api/add-to-mycourses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: item.name,
          img: item.img,
          price: item.price,
        }),
      });
      alert('Course added to cart!');
    } catch (error) {
      console.error('Error adding Course to cart:', error);
    }
  };

  return (
    <Col xs={12} sm={6} md={4} lg={4} className="mb-4">
      <Card className="h-100 text-center">
        <Card.Img
          variant="top"
          src={item.img}
          style={{
            objectFit: 'cover',
            height: '200px',
            width: '100%',
            borderRadius: '10px 10px 0 0'
          }}
        />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
          <Card.Text className="text-muted">{item.price} </Card.Text>
          <Button variant="success" className="mt-auto" onClick={handleAddToCart}>
            Enroll Now
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ItemCard;

