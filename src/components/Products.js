import listproducts from "../products.json";
import React from "react";
import { Row, Alert } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Product } from "./Product";

export function Products() {
  
  const [alertShow, setAlert] = useState(false);

  const buy = () => {
    setAlert(true);
    setTimeout(() => 
    setAlert(false), 1000);
  };

  const [msg, setMsg] = useState(false);

  useEffect(() => {
    setMsg(true);
    setTimeout(() => {
      setMsg(false);
    }, 4000);
  }, []);

  return (
    <div>
      <Alert show={msg} variant="success">
        <Alert.Heading>
          Hey, Welcome To Our Shop <b>MyStore</b>
          <br />{" "}
          <p>
            Thank you for choosing our store, we hope you enjoy your shopping
            experience!{" "}
          </p>
        </Alert.Heading>
        <hr />
      </Alert>
      <Row className="d-flex justify-content-center p-4">
        {listproducts.map((product, index) => (
          <Product
            key={index}
            // product={product}
            name={product.name}
            price={product.price}
            img={product.img}
            description={product.description}
            like={product.like}
            quantity={product.quantity}
            onClick={() => buy()}
          />
        ))}
      </Row>
      <Alert show={alertShow} variant="success">
        <Alert.Heading>You bought an Item!</Alert.Heading>
      </Alert>
    </div>
  );
}
