import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import OrdersCard from "./OrdersCard";
import axios from "axios";

const Orders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  const url = `http://localhost:5000/checkout?email=${user?.email}`;

  useEffect(() => {
    axios.get(url, { withCredentials: true })
    .then((res) => {
      setOrders(res.data);
    });
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     // console.log(data);
    //     setOrders(data);
    //   });
  }, [url]);

  const handleDelete = (id) => {
    console.log(id);
    const procced = confirm("are you sure to delete?");
    if (procced) {
      fetch(`http://localhost:5000/checkout/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted success");
            const remaining = orders.filter((order) => order._id !== id);
            setOrders(remaining);
          }
        });
    }
  };

  const handleUpdate = (id) => {
    fetch(`http://localhost:5000/checkout/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = orders.filter((order) => order._id !== id);
          const updated = orders.find((order) => order._id === id);
          updated.status = "confirm";
          const newOrders = [updated, ...remaining];
          setOrders(newOrders);
        }
      });
  };

  return (
    <div className="p-10 text-center">
      <h1 className="font-semibold text-xl">Total: {orders.length}</h1>

      <div>
        {orders.map((order) => (
          <OrdersCard
            key={order._id}
            order={order}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          ></OrdersCard>
        ))}
      </div>
    </div>
  );
};

export default Orders;
