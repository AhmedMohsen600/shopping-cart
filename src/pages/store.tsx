import { Col, Row } from "react-bootstrap";
import itemsData from "../data/items.json";
import { StoreItem } from "../components/storeItem";
export default function Store() {
  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {itemsData.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}
