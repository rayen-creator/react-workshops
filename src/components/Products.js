import Product from "./Product";
import listproducts from "../products.json"
import React, {Component} from 'react';

export default class Products extends Component{
    render() {
return (
    <>
      {
        listproducts.map((product,index)=>(
        <Product 
        key={index}
        // product={product}
        name={product.name} 
        price = {product.price}
        img= {product.img}
        description= {product.description}
        />
    ))}
    </>
  
   
)
    }
}