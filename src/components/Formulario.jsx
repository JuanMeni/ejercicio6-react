import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./Formulario.css";
import ListaColores from "./ListaColores";

const Formulario = () => {
  const [arregloColores, setArregloColores] = useState([]);
  const [colores, setColores] = useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();
    setArregloColores([...arregloColores, colores]);
    setColores('');
  }

  const borrarColor = (nombre) =>{
    let arregloModificado = arregloColores.filter((valor)=>{return valor !== nombre})
    setArregloColores(arregloModificado);
  }

  return (
    <section className="container">
      <div className="container mt-3 shadow p-3 mb-5 bg-body rounded">
        <h1>Administrar colores</h1>
        <div className="container text-center d-flex bgCard">
          <div className="my-3" style={{backgroundColor: colores, width:"150px", height:"150px"}}></div>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="d-flex my-3 mt-5">
              <Form.Control
                type="text"
                className=" mx-3"
                placeholder="Ingrese un color, ej. Rojo"
                onChange={(e) => {
                  setColores(e.target.value.trimStart());
                }}
                value={colores}
              />
              <Button variant="primary" type="submit" className="ms-1">
                Guardar
              </Button>
            </Form.Group>
          </Form>
        </div>
      </div>
      <ListaColores arregloColores={arregloColores} borrarColor={borrarColor}></ListaColores>
    </section>
  );
};

export default Formulario;
