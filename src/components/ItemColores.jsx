import React from "react";
import { ListGroup, Button, Card } from "react-bootstrap";


const ItemColores = (props) => {
  return (
    <div>
      <ListGroup.Item>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{props.colorCargado}</Card.Title>
            <div className="bgCard py-3">
            <div className="container" style={{backgroundColor: props.colorCargado, width:"150px", height:"150px"}}></div>
            </div>
            <Button variant="danger" onClick={()=>props.borrarColor(props.colorCargado)} className="mt-2">Borrar</Button>
          </Card.Body>
        </Card>
      </ListGroup.Item>
    </div>
  );
};

export default ItemColores;
