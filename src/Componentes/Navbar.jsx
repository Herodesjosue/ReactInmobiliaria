import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "../Estilos/Navbar.css";
import HomeIcon from "@mui/icons-material/Home";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import ApartmentIcon from "@mui/icons-material/Apartment";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import RoofingIcon from "@mui/icons-material/Roofing";
import { supabase } from "../supabase/createClient";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

import { UserOption } from "./UserOption";

export function Topbar() {
  return (
    <Navbar
      variant="dark"
      expand="lg"
      className="p-3"
      style={{ backgroundColor: "#19497B", boxShadow: "1px 1px 5px black" }}
    >
      <Container fluid>
        <Navbar.Brand href="#">INMOBILIARIADYV</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to="/Inicio" className="Links">
              <HomeIcon className="IconMargin" />
              Home
            </Link>
            <Link to="/Registro" className="Links">
              <AppRegistrationIcon className="IconMargin" />
              Registros
            </Link>
            <RoofingIcon className="text-light my-auto ms-1" />
            <NavDropdown title="Inmuebles" id="navbarScrollingDropdown">
              <Link to="/Apartamentos" className="Collapse">
                <ApartmentIcon className="IconMargin" /> Apartamentos
              </Link>

              <NavDropdown.Item></NavDropdown.Item>
              <NavDropdown.Divider />

              <Link to="/Casas" className="Collapse">
                <MapsHomeWorkIcon className="IconMargin" /> Casas
              </Link>
            </NavDropdown>
            <Link to="/" className="Links">
              <AccountBoxIcon className="my-auto my-auto" />
              Clientes
            </Link>
            <UserOption />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
