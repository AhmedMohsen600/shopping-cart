import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/shppingCartContext";
import storeItems from "../data/items.json";
import { formatCurrency } from "../util/formatCurrency";
type CartItemProps = {
  id: number;
  qty: number;
};
export const CartItem = ({ id, qty }: CartItemProps) => {
  const { removeFromCart, totalPrice } = useShoppingCart();
  const item = storeItems.find((item) => item.id === id);
  if (item == null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.imgUrl}
        alt="koko"
        style={{ width: "150px", height: "80px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.name} {qty > 1 && <span>x{qty}</span>}
        </div>
        <div className="text-muted" style={{ fontSize: "20px" }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div>{formatCurrency(totalPrice(item.price))}</div>
      <Button
        variant="outline-danger"
        size="sm"
        // className="rounded"
        onClick={() => removeFromCart(item.id)}
      >
        X
      </Button>
    </Stack>
  );
};
