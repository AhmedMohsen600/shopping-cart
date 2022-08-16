import { Button, Card } from "react-bootstrap";
import { useShoppingCart } from "../context/shppingCartContext";
import { formatCurrency } from "../util/formatCurrency";
type StoreItemProps = {
  name: string;
  id: number;
  price: number;
  imgUrl: string;
};

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const { increaseCartQty, decreaseCartQty, removeFromCart, getItemQty } =
    useShoppingCart();
  let qty = getItemQty(id);
  return (
    <Card>
      <Card.Img
        variant="top"
        height="200px"
        src={imgUrl}
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {qty === 0 ? (
            <Button onClick={() => increaseCartQty(id)} className="w-100">
              + Add To Cart
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: "1rem" }}
            >
              <div
                style={{ gap: "1rem" }}
                className="d-flex align-items-center justify-content-center"
              >
                <Button onClick={() => decreaseCartQty(id)}>-</Button>
                <div>
                  <span className="fs-3">{qty}</span> in cart
                </div>
                <Button onClick={() => increaseCartQty(id)}>+</Button>
              </div>
              <Button
                onClick={() => removeFromCart(id)}
                size="sm"
                variant="danger"
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
