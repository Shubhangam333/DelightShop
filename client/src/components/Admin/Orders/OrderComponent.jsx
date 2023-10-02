import { AiOutlineEdit } from "react-icons/ai";
import { Link } from "react-router-dom";

const OrderComponent = ({ order }) => {
  return (
    <tr className=" text-center ">
      <td>{order._id}</td>
      <td className="truncate ">{order.paymentInfo.status}</td>
      <td>{order.user}</td>
      <td>{order.orderStatus}</td>
      <td>{order.paidAt}</td>
      <td>{order.paymentInfo.id}</td>
      <td>
        <Link to={`/admin/edit-user/`}>
          <button>
            <AiOutlineEdit />
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default OrderComponent;
