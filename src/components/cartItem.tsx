import { Stack } from "react-bootstrap";
// import { useShoppingCart } from "../context/shppingCartContext";
import storeItems from "../data/items.json";
type CartItemProps = {
  id: number;
  qty: number;
};
export const CartItem = ({ id, qty }: CartItemProps) => {
  //   const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((item) => item.id === id);
  if (item == null) return null;

  return (
    <Stack direction="horizontal" gap={2}>
      <img
        src={item.imgUrl}
        alt="koko"
        style={{ width: "150px", height: "150px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.name} {qty > 1 && <span>x{qty}</span>}
        </div>
      </div>
    </Stack>
  );
};
