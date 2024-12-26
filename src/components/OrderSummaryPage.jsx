import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./OrderSummary.css";

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch orders from API
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        // const response = await axios.get("http://localhost:3001/api/v1/orders");
        // setOrders(response.data.orders);
        const dummyOrders = [
            {
              id: 1,
              customerName: "John Doe",
              total: 150.75,
              date: "2024-12-20T10:30:00Z", // ISO format date
            },
            {
              id: 2,
              customerName: "Jane Smith",
              total: 85.5,
              date: "2024-12-21T14:20:00Z",
            },
            {
              id: 3,
              customerName: "Michael Brown",
              total: 210.0,
              date: "2024-12-22T09:15:00Z",
            },
            {
              id: 4,
              customerName: "Emily Davis",
              total: 120.99,
              date: "2024-12-23T11:45:00Z",
            },
            {
              id: 5,
              customerName: "Daniel Wilson",
              total: 175.25,
              date: "2024-12-24T17:30:00Z",
            },
          ];
          setOrders(dummyOrders);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch orders. Please try again.");
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) return <div className="loading">Loading orders...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="order-list">
      <h1>Order List</h1>
      <div className="orders">
        {orders.length === 0 ? (
          <div className="no-orders">No orders found.</div>
        ) : (
          orders.map((order) => (
            <div key={order.id} className="order-card">
              <h2>Order #{order.id}</h2>
              <p><strong>Customer:</strong> {order.customerName}</p>
              <p><strong>Total:</strong> ${order.total.toFixed(2)}</p>
              <p><strong>Date:</strong> {new Date(order.date).toLocaleDateString()}</p>
              <Link to={`/orders/${order.id}`} className="view-order">
                View Details
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default OrderList;
