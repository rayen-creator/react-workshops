import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  RemoveItemFromCart,
  DeleteItem,
  selectCart,
  selectCountAll,
  selectTotal,
} from "../ReduxToolkit/slices/cartSlice";
import { Col, Container, Row, Card, Table, Button } from "react-bootstrap";

function Cart() {
  const Total = useSelector(selectTotal);
  const cart = useSelector(selectCart);

  const dispatch = useDispatch();
  function TotalPrice(price, q) {
    return Number(price * q).toString();
  }
  const add = (p) => {
    dispatch(addItemToCart(p));
  };
  const RemoveItem = (p) => {
    dispatch(RemoveItemFromCart(p));
  };
  const Delete = (p) => {
    dispatch(DeleteItem(p));
  };
  console.log("ss", cart);

  return (
    <Card className="m-5">
      <Card.Body>
        <Table>
          <thead>
            <tr></tr>
          </thead>
          <tbody>
            {cart.map((item, key) => (
              <tr key={key}>
                <td>
                  <Row>
                    <Col>
                      <img
                        src={require("../assets/images/" + item.img)}
                        width={"40%"}
                        height="200px"
                      />
                    </Col>
                    <Col>
                      <div>{item.name}</div>
                      <div>{item.price} DT</div>
                    </Col>
                  </Row>
                </td>
                <td> <Button
                    variant="outline-danger"
                    onClick={() => RemoveItem(item)}
                  >
                    -
                  </Button>
                  {item.quantity}</td>
                <td>
                  
                 
                  <Button variant="outline-success" onClick={() => add(item)}>
                    +
                  </Button>
                  Total price : {TotalPrice(item.price, item.quantity)} DT
                </td>
                <td>
                  <Button variant="outline-danger" onClick={() => Delete(item)}>
                    X
                  </Button>
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan={3}>Total Carts</td>
              <td>{Total} DT</td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}

export default Cart;
