import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

const RestaurantCard = props => {
  const restaurant = props.restaurant;

  return(
    <div>
      <Card>
        <CardImg top width="100%" src={restaurant.image_url} alt={ restaurant.name } />
        <CardBody>
          <CardTitle><strong>{ restaurant.name }</strong></CardTitle>
          <CardSubtitle>{ restaurant.address }, { restaurant.city } </CardSubtitle>
          <CardText>Price: { restaurant.price }$</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default RestaurantCard;