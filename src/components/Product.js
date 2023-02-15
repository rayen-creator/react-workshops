import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = props || {};
  }
  render() {
    return (
      <Card style={{ width: "17rem" }} className="m-2">
        <Card.Img
          variant="top"
          src={require("../assets/images/" + this.state.img)}
          width="100%"
          height="200px"
        />
        <Card.Body>
          <Card.Title>{this.state.name}</Card.Title>
          <Card.Text>Description : {this.state.description}</Card.Text>
          <Card.Text>Price : {this.state.price} DT</Card.Text>
          <Card.Text>Like : {this.state.like}</Card.Text>
          <Button variant="primary" style={{ marginRight:"50px"}} >Like</Button>
          <Button variant="info" style={{ marginLeft:"50px"}} disabled={this.state.quantity === 0}>
            Buy
          </Button>
        </Card.Body>
      </Card>
    );
  }
}
