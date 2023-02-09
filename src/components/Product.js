import React, {Component} from 'react';
import  Card  from "react-bootstrap/Card"


 export default class Product extends Component {

    constructor(props){
        super(props)
        this.state=props
    }
    render(){
        return (
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={require(`../assets/images/${this.state.img}`)}/>
            <Card.Body>
              <Card.Title>{this.state.name}</Card.Title>
              <Card.Text>
                {this.state.description}
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">{this.state.price}</Card.Footer>
          </Card>
        );
    }
    
  }
  
