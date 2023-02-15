import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { supabase } from "../supabase/createClient";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Topbar } from "./Navbar";

export const Editar = () => {
  const [form, setForm] = useState([]);
  const [nombre, setNombre] = useState("");
  const [captador, setCaptador] = useState("");
  const [tipo, setTipo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [habitaciones, setHabitaciones] = useState("");
  const [baños, setBaños] = useState("");
  const [puestosDeEstacionamiento, setPuestosDeEstacionamiento] = useState("");
  const [pozoDeAgua, setpozoDeAgua] = useState(Boolean());
  const [plantaElectrica, setPlantaElectrica] = useState(Boolean());
  const [piso, setPiso] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [metros, setMetros] = useState("");
  const [estado, setEstado] = useState("");
  const [titulo, setTitulo] = useState("");
  const [precio, setPrecio] = useState("");
  const [navegar, setNavegar] = useState(false);
  const { id } = useParams();

  //Actualizador
  useEffect(() => {
    const FetchSmoothie = async () => {
      let { data, error } = await supabase
        .from("Apartamentos")
        .select()
        .eq("id", id)
        .single();

      setForm(data);
      setNombre(data.nombre);
      setCaptador(data.captador);
      setTipo(data.tipo);
      setDescripcion(data.descripcion);
      setHabitaciones(data.habitaciones);
      setBaños(data.baños);
      setPuestosDeEstacionamiento(data.puestosDeEstacionamiento);
      setpozoDeAgua(data.pozoDeAgua);
      setPlantaElectrica(data.plantaElectrica);
      setPiso(data.piso);
      setUbicacion(data.ubicacion);
      setMetros(data.metros);
      setEstado(data.estado);
      setTitulo(data.titulo);
      setPrecio(data.precio);
      
    };

    FetchSmoothie();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from("Apartamentos")
      .update({
        nombre,
        captador,
        tipo,
        descripcion,
        habitaciones,
        plantaElectrica,
        baños,
        puestosDeEstacionamiento,
        pozoDeAgua,
        piso,
        ubicacion,
        metros,
        titulo,
        estado,
        precio
      })
      .eq("id", id);
      alert("Datos Actualizados exitosamente")
        setNavegar(true);
      if(error) {
        console.error(error);
      }
      
  };

  return (
    <div>
     <Topbar></Topbar> 
    
    <div className="container mt-5 d-flex flex-wrap justify-content-center">
      <Form
        onSubmit={handleSubmit}
        className="d-flex flex-column align-items-center justify-content-center "
      >
        <div className="container mt-5 d-flex flex-wrap justify-content-center">
        <FloatingLabel
            controlId="floatingInput"
            label="Titulo"
            className="mb-3 w-25 me-2"
          >
            <Form.Control
              type="text"
              placeholder="titulo"
              name="titulo"
              onChange={(e) => {
                setTitulo(e.target.value);
              }}
              value={titulo}
            />
             </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Nombre de la Residencia"
            className="mb-3 w-25 me-2"
          >
            <Form.Control
              type="text"
              placeholder="Nombre"
              name="nombre"
              onChange={(e) => {
                setNombre(e.target.value);
              }}
              value={nombre}
              disabled
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Captador"
            className="mb-3 w-25 me-2"
          >
            <Form.Control
              type="text"
              placeholder="Captador"
              name="captador"
              onChange={(e) => {
                setCaptador(e.target.value);
              }}
              value={captador}
              disabled
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Metros Cuadrados"
            className="mb-3 w-25 me-2"
          >
            <Form.Control
              type="number"
              placeholder="Metros"
              name="metros"
              onChange={(e) => {
                setMetros(e.target.value);
              }}
              value={metros}
            />
          </FloatingLabel>
          <Form.Select
            name="tipo"
            onChange={(e) => {
              setTipo(e.target.value);
            }}
            value={tipo}
            size="sm"
            className="w-25 mb-3 me-2"
          >
            <option>Tipo de Inmueble</option>
            <option>Casa</option>
            <option>Apartamento</option>
            <option>Otro</option>
          </Form.Select>

          <FloatingLabel
            controlId="floatingInput"
            label="Estado del Inmueble"
            className="mb-3 w-25 me-2"
          >
            <Form.Control
              type="text"
              placeholder="Estado del Inmueble"
              name="Estado"
              onChange={(e) => {
                setEstado(e.target.value);
              }}
              value={estado}
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Habitaciones"
            className="mb-3 w-25 me-2"
          >
            <Form.Control
              type="number"
              min="0"
              max="10"
              placeholder="Habitaciones"
              name="habitaciones"
              onChange={(e) => {
                setHabitaciones(e.target.value);
              }}
              value={habitaciones}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Baños"
            className="mb-3 w-25 me-2"
          >
            <Form.Control
              type="number"
              min="0"
              max="10"
              placeholder="Baños"
              onChange={(e) => {
                setBaños(e.target.value);
              }}
              name="baños"
              value={baños}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Puestos de Estacionamiento"
            className="mb-3 w-25 me-2"
          >
            <Form.Control
              type="number"
              min="0"
              max="10"
              placeholder="Puestos de Estacionamiento"
              name="puestosDeEstacionamiento"
              onChange={(e) => {
                setPuestosDeEstacionamiento(e.target.value);
              }}
              value={puestosDeEstacionamiento}
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Piso"
            className="mb-3 w-25 me-2"
          >
            <Form.Control
              type="text"
              placeholder="Piso"
              name="piso"
              value={piso}
              onChange={(e) => {
                setPiso(e.target.value);
              }}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Ubicacion"
            className="mb-3 w-25 me-2"
          >
            <Form.Control
              type="text"
              placeholder="Ubicacion"
              name="ubicacion"
              value={ubicacion}
              onChange={(e) => {
                setUbicacion(e.target.value);
              }}
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Informacion Adicional"
            className="mb-3 w-25 me-2"
          >
            <Form.Control
              as="textarea"
              aria-label="Informacion Adicional"
              name="descripcion"
              value={descripcion}
              onChange={(e) => {
                setDescripcion(e.target.value);
              }}
            />
          </FloatingLabel>
          
        </div>
        <div className="d-flex flex-column me-3 mb-3">
            {pozoDeAgua ? (
              <Form.Check
                type="checkbox"
                id="default-checkbox"
                label="Pozo de Agua"
                name="pozoDeAgua"
                onChange={(e) => {
                  setpozoDeAgua(e.target.checked);
                }}
                value={pozoDeAgua}
                checked
              />
            ) : (
              <Form.Check
                type="checkbox"
                id="default-checkbox"
                label="Pozo de Agua"
                name="pozoDeAgua"
                onChange={(e) => {
                  setpozoDeAgua(e.target.checked);
                }}
                value={pozoDeAgua}
              />
            )}

            {plantaElectrica ? (
              <Form.Check
                type="checkbox"
                id="default-checkbox"
                label="Planta Electrica"
                name="plantaElectrica"
                onChange={(e) => {
                  setPlantaElectrica(e.target.checked);
                }}
                value={plantaElectrica}
                checked
              />
            ) : (
              <Form.Check
                type="checkbox"
                id="default-checkbox"
                label="Planta Electrica"
                name="plantaElectrica"
                onChange={(e) => {
                  setPlantaElectrica(e.target.checked);
                }}
                value={plantaElectrica}
              />
            )}
          </div>
          <FloatingLabel
            controlId="floatingInput"
            label="Ingrese el Precio del Inmueble"
            className="w-50"
          >
            <Form.Control
              type="number"
              min="0"
              placeholder="Precio del inmueble"
              name="precio"
              onChange={(e) => {
                setPrecio(e.target.value);
              }}
              value={precio}
              required
            />
          </FloatingLabel>
        <div className="d-flex mt-3">
          {navegar ? <Navigate to={`/${tipo}s`} replace={true}></Navigate>: null}
          <Button
            value="Enviar"
            className="w-100 me-2 btn-success"
            type="submit"
          >
            Guardar
          </Button>
          <Link to={`/${tipo}s`}>
          <Button className="w-100 btn-warning " type="button" value="Salir">
            Salir
          </Button>
          </Link>
        </div>
      </Form>
    </div>
    </div>
  );
};
