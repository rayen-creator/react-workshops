import React ,{useEffect , useState }from "react";
import { Container , Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../service/api";

function AddProduct(){
    const [product,setProduct]=useState({
        "id" :"",
      "name": "",
      "price": 0,
      "img": "",
      "like": 0,
      "quantity": 0,
      "description": ""
    })
    const navigate = useNavigate();
    const handlechange=(e)=>{
        console.log(e.target.value);
        setProduct({...product,[e.target.name]:e.target.value});
      
    }
    const handlechangeFile=(e)=>{
        console.log(e.target.value);

        setProduct({...product,img:e.target.files[0].name});
        console.log(product);
      
    }
const add = (e) => {
    addProduct(product).then((res) => {
    //    e.preventDefault();
        console.log(res);
        navigate("/products/list");
    }).catch((err) => console.log(err));
}
    return(
        <Container style={{ marginTop: "30px" }}>
        <Form>
      <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control  as="textarea" type="text" placeholder="Enter the name"
         name="name"
         onChange={(e)=>handlechange(e)} />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Enter the product description" name="description" onChange={(e)=>handlechange(e)}  />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Price</Form.Label>
        <Form.Control   type="number" name="price"  onChange={(e)=>handlechange(e)}  />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Quantity</Form.Label>
        <Form.Control   type="number"  name="quantity" onChange={(e)=>handlechange(e)}  />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Image</Form.Label>
        <Form.Control   type="file" name="img" 
         onChange={(e)=>handlechangeFile(e)} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add Product
      </Button>
      <Button variant="gray" type="submit"  onClick={ (e) =>add(e)} >
        Save
      </Button>
    </Form>
    </Container>
    )
}
export default AddProduct;