import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { supabase } from "../supabase/createClient";
import { Link, useNavigate } from "react-router-dom";
import "../Estilos/Login.css"
import EmailIcon from '@mui/icons-material/Email';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    
    // const { data, error } = await supabase.auth.signUp({
    //   email: email,
    //   password: password,
    // });
  };

  return (
    <div className="backgroundMain container-fluid">
      
      <Form className="container  w-50 d-flex flex-column align-items-center " onSubmit={handleSubmit}>
      
        <div className="loginCard">
        <div style={{}}>
        <h4>Inicio de Sesion</h4>
        <hr />
      </div>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Direccion de Correo Electronico</Form.Label>
          <div className="d-flex">
          <EmailIcon className="my-auto fs-2 me-1"/>
          <Form.Control
            type="email"
            placeholder={"Ingresa tu correo electronico"}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          </div>
          <Form.Text className="text-light">
            Nunca compartiremos tu email con nadie.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <div className="d-flex">
            <VpnKeyIcon className="my-auto fs-2 me-1"/>
          <Form.Control
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          </div>
        </Form.Group>
        
        <Form.Group className="d-flex justify-content-center">
        <Button style={{backgroundColor:"#89A8C4"}} variant="" type="submit">
          Ingresar
        </Button>
        <Link to="/Registrate">
        <Button style={{backgroundColor:"#EDF3F4", marginLeft:"5px"}}variant="" type="button">
          Registrarse
        </Button>
        </Link>
        </Form.Group>
        </div>
      </Form>
    </div>
  );
};
