import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import RestaurantCard from './RestaurantCard';

const RestaurantList = props => {
  return(
    <div>
      <Container>
        <Row>
        { props.restaurants && props.restaurants.length > 0 ? props.restaurants.map(restaurant => {
          return (
            <Col sm="6" md="4" className="mb-5"  key={restaurant.id}>
              <RestaurantCard restaurant={restaurant} />
            </Col>
          )
        }) : null }
        </Row>
      </Container>
    </div>
  );
}

export default RestaurantList;