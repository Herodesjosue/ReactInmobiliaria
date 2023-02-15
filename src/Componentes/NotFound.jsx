import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="container d-flex justify-content-center">
      <div className="">
      <h1>OPSS.... PAGINA NO ENCONTRADA</h1>
      <Link to="/Inicio"> Presioname para ir a Inicio</Link>
      </div>
    </div>
  );
};
