import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import "../Estilos/InmueblesCard.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Modal from "./Modal";
import { useModal } from "../hooks/useModal";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";
import { supabase } from "../supabase/createClient";
import { useNavigate } from "react-router-dom";

export const InmueblesCard = ({
  Eliminar,
  nombre,
  captador,
  tipo,
  descripcion,
  habitaciones,
  baños,
  puestosDeEstacionamiento,
  pozoDeAgua,
  plantaElectrica,
  piso,
  ubicacion,
  metros,
  id,
  titulo,
  estado,
  cdn,
  precio,
  userId
}) => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [userID, setUserID] = useState("");

  const navigate = useNavigate();

  const detectarUsuario = async () => {
    const { data, error } = await supabase.auth.getUser();

    setUserID(data.user.id);
  };
  detectarUsuario();


  return (
    <div style={{textTransform: "uppercase"}}>
      <Card style={{ width: "18rem", marginRight: "10px", marginTop: "10px" }}>
        {/* <Card.Img className="cardImage" variant="top" src={`${cdn}/${captador}/${nombre}/1`} /> */}
        <Carousel className="">
            <Carousel.Item>
              <img
                className="d-block cardImage"
                src={`${cdn}/${captador}/${nombre}/1`}
                alt="First slide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block cardImage"
                src={`${cdn}/${captador}/${nombre}/2`}
                alt="Second slide"
              />

              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block cardImage"
                src={`${cdn}/${captador}/${nombre}/3`}
                alt="Third slide"
              />

              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        <Card.Body>
          <Card.Title className="fs-5">{titulo}</Card.Title>
          <hr />
          <ul style={{listStyle: "", padding:"0%",marginLeft:"15px", fontSize: "14px"}}>
            <>
              <li>Residencia: {nombre}</li>
              <li>captador: {captador}</li>
              <li>metros: {metros}</li>
              <li>estado: {estado}</li>
              <li>habitaciones: {habitaciones}</li>
              <li>baños: {baños}</li>
              <li>Puestos de Estacionamiento: {puestosDeEstacionamiento}</li>
              <li>Pozo de agua: {pozoDeAgua ? <>si</> : <>no</>} </li>
              <li>Planta electrica: {plantaElectrica ? <>si</> : <>no</>}</li>
              <li>Piso: {piso}</li>
              <li>Ubicacion: {ubicacion}</li>
              <li>Precio: {precio}$</li>
            </>
          </ul>
          <div className="text-center">
            {/* <Link className="botones" to={"/" + id}> */}
              <Button
                variant="success"
                className="success"
                size="sm"
                disabled={userId !== userID}
                onClick={()=>{
                  navigate("/"+id)
                }}
              >
                <EditIcon />
                Editar
              </Button>{" "}
            {/* </Link> */}
            <Button
              variant="danger"
              size="sm"
              onClick={() => {
                Eliminar(id);
              }}
              disabled={userId !== userID}
            >
              <DeleteIcon />
              Eliminar
            </Button>{" "}
            <Button
              variant="secondary"
              size="sm"
              className="text-light"
              onClick={openModal1}
            >
              <VisibilityIcon />
            </Button>{" "}
          </div>
        </Card.Body>
      </Card>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <div className="container d-flex justify-content-evenly">
          <Carousel className="w-75 m-auto p-3">
            <Carousel.Item>
              <img
                className="d-block images"
                src={`${cdn}/${captador}/${nombre}/1`}
                alt="First slide"
              />
              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block images"
                src={`${cdn}/${captador}/${nombre}/2`}
                alt="Second slide"
              />

              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block images"
                src={`${cdn}/${captador}/${nombre}/3`}
                alt="Third slide"
              />

              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <div className="informacion">
            <p className="text-center tituloModal">{titulo}</p>
            <ul className="ListaDescripcion">
              <>
                <li>Residencia: {nombre}</li>
                <li>captador: {captador}</li>
                <li>metros: {metros}</li>
                <li>estado: {estado}</li>
                <li>habitaciones: {habitaciones}</li>
                <li>baños: {baños}</li>
                <li>Puestos de Estacionamiento: {puestosDeEstacionamiento}</li>
                <li>Pozo de agua: {pozoDeAgua ? <>si</> : <>no</>} </li>
                <li>Planta electrica: {plantaElectrica ? <>si</> : <>no</>}</li>
                <li>Piso: {piso}</li>
                <li>Ubicacion: {ubicacion}</li>
                <p>Precio: {precio}$</p>
              </>
            </ul>
          </div>
        </div>
      </Modal>
    </div>
  );
};
