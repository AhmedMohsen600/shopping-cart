import { Offcanvas } from "react-bootstrap";
import { useShoppingCart } from "../context/shppingCartContext";
import { CartItem } from "./cartItem";

export const ShoppingCart = () => {
  const { isOpen, closeCart, cartItems } = useShoppingCart();
  console.log({ cartItems });

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </Offcanvas.Body>
    </Offcanvas>
  );
};
