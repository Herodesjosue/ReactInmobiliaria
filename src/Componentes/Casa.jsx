import React, { useState, useEffect } from "react";
import "../Estilos/Apartamentos.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { supabase } from "../supabase/createClient";
import { Link } from "react-router-dom";
import { InmueblesCard } from "./InmueblesCard";
import { Loader } from "./Loader";
import { Topbar } from "./Navbar";

export const Casas = () => {
  const [inmuebles, setInmuebles] = useState([]);
  const [tablaInmuebles, setTablainmuebles] = useState([]);
  const [search, setSearch] = useState("");
  const [empty, setEmpty] = useState(false);
  const [loader, setLoader] = useState(true);
  let CDNUrl =
    "https://hlknwqtmpjxsfwsiaxha.supabase.co/storage/v1/object/public/images/public/";

  useEffect(() => {
    const Apartamentos = async () => {
      let { data, error } = await supabase.from("Apartamentos").select();
      if (data) {
        setInmuebles(data);
        setTablainmuebles(data);
        setLoader(false)
      }
      
      if (error) {
        setEmpty(true);
      }
    };

    Apartamentos();
  }, []);

  const Eliminar = async (valor) => {
    if (confirm("Seguro que desa eliminar?")) {
      const { data, error } = await supabase
        .from("Apartamentos")
        .delete()
        .eq("id", valor);
      console.log(data);
      Handledelete(valor);
    }
  };

  const Handledelete = (id) => {
    setInmuebles((prevInmuebles) => {
      return prevInmuebles.filter((im) => im.id !== id);
    });
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
    filter(e.target.value);
  };

  const filter = (e) => {
    let resultadoBusqueda = tablaInmuebles.filter((apartamentos) => {
      if (apartamentos.nombre.toLowerCase().includes(e.toLowerCase())) {
        return apartamentos;
      } else if (
        apartamentos.ubicacion.toLowerCase().includes(e.toLowerCase())
      ) {
        return apartamentos;
      } else if (apartamentos.titulo.toLowerCase().includes(e.toLowerCase())) {
        return apartamentos;
      }
    });
    setInmuebles(resultadoBusqueda);
  };

  const filtroCasa = inmuebles.filter((inmueble)=> inmueble.tipo == "Casa");
  return (
    <div>
      <Topbar/>
    
    <div className="container mt-5 herodes">
      <Form className="d-flex mb-5">
        <Form.Control
          type="search"
          placeholder="Ingrese una ubicacion, Estado o nombre del Inmueble para realizar la busqueda"
          className="me-2"
          aria-label="Search"
          value={search}
          onChange={handleChange}
        />
        <Button variant="outline-success">Buscar</Button>
      </Form>
      <div className="container d-flex flex-wrap justify-content-center">
        {loader ? <Loader/>: null}
        {empty ? (
          <h1>No se pudo realizar la Conexion....</h1>
        ) : (
          filtroCasa.map((filtroCasa) => {
            return (
              <>
                <InmueblesCard
                  id={filtroCasa.id}
                  Eliminar={Eliminar}
                  nombre={filtroCasa.nombre}
                  captador={filtroCasa.captador}
                  tipo={filtroCasa.tipo}
                  descripcion={filtroCasa.descripcion}
                  habitaciones={filtroCasa.habitaciones}
                  baños={filtroCasa.baños}
                  puestosDeEstacionamiento={filtroCasa.puestosDeEstacionamiento}
                  pozoDeAgua={filtroCasa.pozoDeAgua}
                  plantaElectrica={filtroCasa.plantaElectrica}
                  piso={filtroCasa.piso}
                  ubicacion={filtroCasa.ubicacion}
                  metros={filtroCasa.metros}
                  titulo={filtroCasa.titulo}
                  estado={filtroCasa.estado}
                  cdn={CDNUrl}
                  precio={filtroCasa.precio}
                />
              </>
            );
          })
        )}
      </div>
    </div>
    </div>
  );
};
