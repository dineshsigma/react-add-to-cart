import PropTypes from "prop-types";
import React,{useState} from "react";
import IconOrderConfirmed from "../assets/images/IconOrderConfirmed.svg";
import Button from "./Button";
import ConfirmedItem from "./ConfirmedItem";
import { Container, TextField, Grid, Typography, FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@mui/material';
import styles from "./Modal.module.css";
import axios from 'axios';
import { notify } from "./toast";
import { ToastContainer } from "react-toastify";

import { useDessertOrderData } from "../contexts/DessertOrderDataContext";

let baseUrl = 'http://localhost:3001';

let name = localStorage.getItem("name");
let email = localStorage.getItem("email")

function Modal() {
  const { items, dispatch } = useDessertOrderData();
  const [formData, setFormData] = useState({
      name: name,
      email: email,
      street: '',
      area: '',
      city: '',
      state: '',
      pincode: '',
      order_items : []
    });
     const [phoneNo, setPhoneNo] = useState(localStorage.getItem("mobile"));
      const [bajajemi, setBajajemi] = useState(false); // Placeholder for bajajemi state
      const [states] = useState(['State 1', 'State 2', 'State 3']); // Example states
      const [valid, setValid] = useState(true); // Placeholder for form validation
      const [showOverlay, setShowOverlay] = useState(false);
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async () => {
        // Filter items where quantity is not 0 and update formData
        const filteredItems = items.filter((item) => item.quantity !== 0);
        
        // Update the order_items array in formData
        setFormData(prevState => ({
          ...prevState,
          order_items: filteredItems,
        }));
        setShowOverlay(true);
        const accessToken = localStorage.getItem('accessToken');
        const urlApi = `${baseUrl}/api/v1/order/createOrders`;
        const response = await axios.post(
          urlApi, 
          {
            ...formData,
            order_items: filteredItems
          }, 
          {
            headers: {
              "token": `${accessToken}`, 
              'Content-Type': 'application/json',
            }
          }
        );
        console.log("response", response);
        if(response.data.status){
          notify("Your Order is Created Successfully","success");
        }else{
          notify("Your Order is  Not Created");
        }
      };
  return (

    <>
   
    <div className={styles.modal}>
    <Container maxWidth="sm" style={{ margin: '20px auto' }}>
      <div className='col-xs-12 col-md-12 p-m-0'>
        <div className='row m-0 card-layout'>
          <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 pb-0 pt-3'>
            <Typography variant="h5">Fill Your Delivery Address</Typography>
            <br />
            <br />
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  label="Name"
                  required
                  fullWidth
                  disabled
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  label="E-mail"
                  required
                  fullWidth
                  disabled
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Phone Number"
                  type="number"
                  value={phoneNo}
                  onChange={(e) => setPhoneNo(e.target.value)}
                 disabled
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  name="street"
                  value={formData.street}
                  onChange={handleChange}
                  label="Street"
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  label="Area"
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  label="City"
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth required>
                  <InputLabel>Select State</InputLabel>
                  <Select
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                  >
                    {states.map((state, index) => (
                      <MenuItem key={index} value={state}>{state}</MenuItem>
                    ))}
                  </Select>
                  <FormHelperText>{!formData.state && 'State is required'}</FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  label="Pincode"
                  type="number"
                  required
                  fullWidth
                />
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </Container>
      <IconOrderConfirmed className={styles.checkMarkImage} />
      <h2>Cart Details</h2>
      <p className={styles.subTitle}>We hope you enjoy your food!</p>
      <div className={styles.confirmedCart}>
        <ul>
          {items
            .filter((item) => item.quantity != 0)
            .map((item) => (
              <ConfirmedItem item={item} key={item.name} />
            ))}
        </ul>
        <div className={styles.totalPrice}>
          <p>Order Total</p>
          <p>
            $
            {items
              .map((items) => items.price * items.quantity)
              .reduce((a, b) => a + b, 0)
              .toFixed(2)}
          </p>
        </div>
      </div>
      <Button
  text="Confirm Order"
  onClick={() => {
    dispatch({ type: "startNewOrder" }); // Dispatch the action
    handleSubmit(); // Call the handleSubmit function
  }}
/>
<ToastContainer />
    </div>
    </>
  );
}
Modal.propTypes = {
  items: PropTypes.object,
};

export default Modal;
