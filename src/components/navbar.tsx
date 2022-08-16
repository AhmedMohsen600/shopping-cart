import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { Link } from "react-router-dom";
export const NavBar = () => {
  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={Link}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={Link}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={Link}>
            About
          </Nav.Link>
        </Nav>
        <Button
          style={{
            width: "3rem",
            height: "3rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
          variant="outline-primary"
          className="rounded-circle"
        >
          cart
          <div
            className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
            style={{
              width: "1.5rem",
              height: "1.5rem",
              position: "absolute",
              bottom: 0,
              right: 0,
              background: "red",
              color: "white",
              transform: "translate(25%,25%)",
            }}
          >
            3
          </div>
        </Button>
      </Container>
    </NavbarBs>
  );
};
