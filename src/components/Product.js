import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import "./product.css";

export function Product(props) {
  const [like, setLike] = useState(props.like);

  const likeProduct = () => {
    setLike(like + 1);
  };

  return (
   like >=5 ? (
   <Card style={{ width: "17rem" }} className="bestProduct m-2">
      <Card.Img
        variant="top"
        src={require("../assets/images/" + props.img)}
        width="100%"
        height="200px"
      />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>Description : {props.description}</Card.Text>
        <Card.Text>Price : {props.price} DT</Card.Text>
        <Card.Text>Like : {like}</Card.Text>
        <Card.Text>quantity : {props.quantity}</Card.Text>

        <Button
          variant="primary"
          style={{ marginRight: "50px" }}
          onClick={()=>likeProduct()}
        >
          Like
        </Button>
        <Button
          variant="info"
          style={{ marginLeft: "50px" }}
          onClick={props.onClick}
          disabled={props.quantity === 0}
        >
          Buy
        </Button>
      </Card.Body>
    </Card>
    ):(
      <Card style={{ width: "17rem" }} className=" m-2">
      <Card.Img
        variant="top"
        src={require("../assets/images/" + props.img)}
        width="100%"
        height="200px"
      />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>Description : {props.description}</Card.Text>
        <Card.Text>Price : {props.price} DT</Card.Text>
        <Card.Text>Like : {like}</Card.Text>
        <Card.Text>quantity : {props.quantity}</Card.Text>

        <Button
          variant="primary"
          style={{ marginRight: "50px" }}
          onClick={()=>likeProduct()}
        >
          Like
        </Button>
        <Button
          variant="info"
          style={{ marginLeft: "50px" }}
          onClick={props.onClick}
          disabled={props.quantity === 0}
        >
          Buy
        </Button>
      </Card.Body>
    </Card>
    )
  );
}
