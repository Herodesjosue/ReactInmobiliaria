import { Route, Routes } from "react-router-dom";
import { Apartamentos } from "./Componentes/Apartamentos";
import { Casas } from "./Componentes/Casa";
import { Footer } from "./Componentes/Footer";
import { Registro } from "./Componentes/Registro";
import "./Estilos/App.css";
import { Editar } from "./Componentes/Editar";
import { HomePage } from "./Componentes/HomePage";
import { Login } from "./Componentes/Login";
import React, { useState, useEffect } from "react";
import { supabase } from "./supabase/createClient";
import { RegistroUsuario } from "./Componentes/RegistroUsuario";
import { useNavigate,Link } from "react-router-dom";
import { NotFound } from "./Componentes/NotFound";

function App() {
  const navigate = useNavigate();
  const [sesion, setSesion] = useState(false);
  // useEffect(() => {
  //   supabase.auth.onAuthStateChange((event, session) => {
  //     console.log(event, session);
  //     if (!session) {
  //       navigate("/Login");
  //     } else {
  //       navigate("/Inicio");
  //     }
  //   });
  // }, []);

  useEffect(() => {
    const detectarUsuario = async () => {
      const { data, error } = await supabase.auth.getUser();
      if(data.user == null){
        navigate("/Login")
      }
      
    };
    detectarUsuario()
  }, []);


  return (
    <div className="App">
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Registrate" element={<RegistroUsuario />}></Route>
        <Route path="/Inicio" element={<HomePage />} />
        <Route path="/Registro" element={<Registro />} />
        <Route path="/Apartamentos" element={<Apartamentos />} />
        <Route path="/Casas" element={<Casas />} />
        <Route path="/:id" element={<Editar />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}



export default App;
