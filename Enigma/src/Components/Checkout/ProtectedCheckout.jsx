import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedCheckout = ({
  children,
}) => {
  const items = useSelector(
    (store) => store.cart.items
  );

  if (items.length === 0) {
    return <Navigate to="/carts" replace />;
  }

  return children;
};

export default ProtectedCheckout;