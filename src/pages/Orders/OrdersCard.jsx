const OrdersCard = ({ order, handleDelete, handleUpdate }) => {
  const { _id, service, email, date, price, img, status } = order;

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <tbody>
          <tr>
            <td>
              <button
                onClick={() => handleDelete(_id)}
                className="btn bg-gray-600 text-white btn-circle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </td>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={img} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{service}</div>
                </div>
              </div>
            </td>
            <td>
              <span className="badge badge-ghost badge-sm">{email}</span>
            </td>
            <td>{date}</td>
            <th>
              <span className="badge badge-ghost badge-sm">{price}</span>{" "}
            </th>
            <th>
              {status === "confirm" ? (
                <button className="btn btn-ghost btn-xs">Confirmed</button>
              ) : (
                <button
                  onClick={() => handleUpdate(_id)}
                  className="btn btn-ghost btn-xs"
                >
                  Confirm
                </button>
              )}
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrdersCard;
