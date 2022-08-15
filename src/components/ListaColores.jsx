import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import ItemColores from "./ItemColores";

const ListaColores = (props) => {
  return (
    <div>
      <ListGroup>
        {props.arregloColores.map((item, posicion) => (
          <ItemColores key={posicion} colorCargado={item} borrarColor={props.borrarColor}></ItemColores>
        ))}
      </ListGroup>
    </div>
  );
};

export default ListaColores;
