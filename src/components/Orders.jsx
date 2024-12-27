// Orders.js
import React, { useEffect, useState } from "react";
import { Container, Typography, Grid } from "@mui/material";
import OrderItemCard from "./OrderItemCard";
import axios from 'axios';

let orders = [
  {
    total_amount: 30.0,
    created_date: 2024 - 12 - 27,
    order_id: 898,
    order_items: [
      {
        name: "Waffle with Berries",
        image: {
          mobile: "/images/image-waffle-mobile.jpg",
          tablet: "/images/image-waffle-tablet.jpg",
          desktop: "/images/image-waffle-desktop.jpg",
          thumbnail: "/images/image-waffle-thumbnail.jpg",
        },
        price: 6.5,
        category: "Waffle",
        quantity: 1,
      },
      {
        name: "Vanilla Bean Crème Brûlée",
        image: {
          mobile: "/images/image-creme-brulee-mobile.jpg",
          tablet: "/images/image-creme-brulee-tablet.jpg",
          desktop: "/images/image-creme-brulee-desktop.jpg",
          thumbnail: "/images/image-creme-brulee-thumbnail.jpg",
        },
        price: 7,
        category: "Crème Brûlée",
        quantity: 1,
      },
      {
        name: "Vanilla Panna Cotta",
        image: {
          mobile: "/images/image-panna-cotta-mobile.jpg",
          tablet: "/images/image-panna-cotta-tablet.jpg",
          desktop: "/images/image-panna-cotta-desktop.jpg",
          thumbnail: "/images/image-panna-cotta-thumbnail.jpg",
        },
        price: 6.5,
        category: "Panna Cotta",
        quantity: 2,
      },
    ],
  },
  {
    total_amount: 30.0,
    order_id: 899,
    created_date: 2024 - 12 - 27,
    order_items: [
      {
        name: "Waffle with Berries",
        image: {
          mobile: "/images/image-waffle-mobile.jpg",
          tablet: "/images/image-waffle-tablet.jpg",
          desktop: "/images/image-waffle-desktop.jpg",
          thumbnail: "/images/image-waffle-thumbnail.jpg",
        },
        price: 6.5,
        category: "Waffle",
        quantity: 1,
      },
      {
        name: "Vanilla Bean Crème Brûlée",
        image: {
          mobile: "/images/image-creme-brulee-mobile.jpg",
          tablet: "/images/image-creme-brulee-tablet.jpg",
          desktop: "/images/image-creme-brulee-desktop.jpg",
          thumbnail: "/images/image-creme-brulee-thumbnail.jpg",
        },
        price: 7,
        category: "Crème Brûlée",
        quantity: 1,
      },
      {
        name: "Vanilla Panna Cotta",
        image: {
          mobile: "/images/image-panna-cotta-mobile.jpg",
          tablet: "/images/image-panna-cotta-tablet.jpg",
          desktop: "/images/image-panna-cotta-desktop.jpg",
          thumbnail: "/images/image-panna-cotta-thumbnail.jpg",
        },
        price: 6.5,
        category: "Panna Cotta",
        quantity: 2,
      },
    ],
  },
];


let baseUrl = 'http://localhost:3001';


const Orders = () => {

    const [ordersList, setOrdersList] = useState([]);

    const getOrderList = async ()=>{
        const accessToken = localStorage.getItem('accessToken');
        const urlApi = `${baseUrl}/api/v1/order/orderlist`;
        const response = await axios.get(
          urlApi, 
          {
            headers: {
              "token": `${accessToken}`, 
              'Content-Type': 'application/json',
            }
          }
        );

        console.log(response);
        setOrdersList(response.data.orderResponse);
    }
    useEffect( () => {
       getOrderList()

}, []);
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Order Details
      </Typography>
      {ordersList.map((order, index) => (
        <div key={index}>
          <Typography variant="h5">
            Order #{index + 1} {order.order_id}
          </Typography>
          <Typography variant="body1">
            Total Amount: ${order.total_amount.toFixed(2) || 0.00}
          </Typography>
          <Typography variant="body1">
            Created Date: {order.created_date}
          </Typography>
          <Grid container spacing={2}>
            {order.order_items.map((item, itemIndex) => (
              <Grid item xs={12} sm={6} md={4} key={itemIndex}>
                <OrderItemCard item={item} />
              </Grid>
            ))}
          </Grid>
        </div>
      ))}
    </Container>
  );
};

export default Orders;
