import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { supabase } from "../supabase/createClient";
import { Button } from "react-bootstrap";
import "../Estilos/UserOption.css";
import Dropdown from "react-bootstrap/Dropdown";

export const UserOption = () => {
  return (
    <div className="UsuarioInfo">
      <figure>
        <img
          src="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
          alt=""
        />
      </figure>
      <div>
        <Dropdown>
          <Dropdown.Toggle
            variant="light"
            id="dropdown-button-drop-down"
          >
            Usuario
          </Dropdown.Toggle>
            
          <Dropdown.Menu style={{padding: "5px"}}>
            <Dropdown.Item
              
              onClick={async (e) => {
                const { error } = await supabase.auth.signOut();
              }}
            >
              <LogoutIcon/>Cerrar sesion
            </Dropdown.Item>
            {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};
