import Product from "./Product";
import listproducts from "../products.json"
import React, {Component} from 'react';
import { Row } from "react-bootstrap";

export default class Products extends Component{
    render() {
return (
    <Row className="d-flex justify-content-center p-4">
      {
        listproducts.map((product,index)=>(
        <Product 
        key={index}
        // product={product}
        name={product.name} 
        price = {product.price}
        img= {product.img}
        description= {product.description}
        like={product.like}
        quantity={product.quantity}
        />
    ))}
    </Row>
  
   
)
    }
}