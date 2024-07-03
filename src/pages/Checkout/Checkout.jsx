import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Checkout = () => {
  const service = useLoaderData();
  const { user } = useContext(AuthContext);
  const { _id, title, img, price } = service;

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = form.email.value;
    const price = form.price.value;
    const order = {
      sevice_id: _id,
      service: title,
      customerName: name,
      img,
      date,
      email,
      price,
    };
    console.log(order);

    fetch("http://localhost:5000/checkout", {
      method: "POST",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("order confirm successfully");
        }
      });
  };

  return (
    <div className="w-full  bg-slate-200 px-8 py-20 rounded ">
      <h2 className="text-2xl font-bold mb-6 text-center">{title}</h2>
      <form
        onSubmit={handleSubmit}
        className="w-4/5 mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-10 justify-center items-center"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={user?.displayName}
            placeholder="Enter your name"
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-700"
          >
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            defaultValue={user?.email}
            placeholder="Enter your email"
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700"
          >
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            defaultValue={price}
            placeholder="Enter price"
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full col-span-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Confirm Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
