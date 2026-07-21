import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";

const CartSection = ({ items }) => {

  if (items.length === 0) {
    return <EmptyCart />;
  }

  return (

    <div className="space-y-6">

      {items.map((item) => (

        <CartItem
          key={`${item.id}-${item.billing}`}
          item={item}
        />

      ))}

    </div>

  );
};

export default CartSection;