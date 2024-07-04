import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import OrdersCard from "./OrdersCard";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Orders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const axiosSecure = useAxiosSecure();

  const url = `/checkout?email=${user?.email}`;

  useEffect(() => {
    // axios.get(url, { withCredentials: true }).then((res) => {
    //   setOrders(res.data);
    // });

    axiosSecure.get(url).then((res) => {
      setOrders(res.data);
    });
    
  }, [url, axiosSecure]);

  const handleDelete = (id) => {
    console.log(id);
    const procced = confirm("are you sure to delete?");
    if (procced) {
      fetch(`https://car-doctor-server-kappa-wine.vercel.app/checkout/${id}`, {
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
    fetch(`https://car-doctor-server-kappa-wine.vercel.app/checkout/${id}`, {
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
