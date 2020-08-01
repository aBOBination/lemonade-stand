import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default class StoreListItem extends React.Component {
  render() {
    return (
      <Card>
        <Card.Img
          variant="top"
          src="https://www.happinessishomemade.net/wp-content/uploads/2018/04/Tissue-Paper-Snail-9.jpg"
        />
        <Card.Body>
          <Card.Title>{this.props.name}</Card.Title>
          <Button href="#" block size="sm">
            Edit Stand
          </Button>
        </Card.Body>
      </Card>
    );
  }
}
