// OrderItemCard.js
import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const OrderItemCard = ({ item }) => {
  return (
    <Card style={{ margin: '10px', width: '200px' }}>
      <CardMedia
        component="img"
        alt={item.name}
        height="140"
        image={item.image.desktop} // Use the appropriate image size
      />
      <CardContent>
        <Typography variant="h6">{item.name}</Typography>
        <Typography variant="body2">Quantity: {item.quantity}</Typography>
        <Typography variant="body2">Price: ${item.price.toFixed(2)}</Typography>
      </CardContent>
    </Card>
  );
};

OrderItemCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};

export default OrderItemCard;