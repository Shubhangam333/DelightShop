const OrderDetailsComponent = ({ order }) => {
  return (
    <tr className=" text-center ">
      <td>{order._id}</td>
      <td className="truncate ">{order.paymentInfo.status}</td>
      <td>{order.user}</td>
      <td>{order.orderStatus}</td>
      <td>{order.paidAt.slice(0, 10)}</td>
      <td>{order.paymentInfo.id}</td>
    </tr>
  );
};

export default OrderDetailsComponent;
