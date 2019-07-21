import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import RestaurantCard from './RestaurantCard';

const RestaurantList = props => {
  return(
    <div>
      <Container>
        <Row>
        { props.restaurants.map(restaurant => {
          return (
            <Col sm="6" md="4" className="mb-5"  key={restaurant.id}>
              <RestaurantCard restaurant={restaurant} />
            </Col>
          )
        })}
        </Row>
      </Container>
    </div>
  );
}

export default RestaurantList;