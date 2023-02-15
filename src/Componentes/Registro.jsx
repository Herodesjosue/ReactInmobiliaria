import { TryRounded } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { supabase } from "../supabase/createClient";
import { Error } from "./Error";
import { Loader } from "./Loader";
import "../Estilos/Registro.css";
import CheckIcon from "@mui/icons-material/Check";
import { Topbar } from "./Navbar";

export const Registro = () => {
  const [nombre, setNombre] = useState("");
  const [captador, setCaptador] = useState("");
  const [tipo, setTipo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [habitaciones, setHabitaciones] = useState("");
  const [baños, setBaños] = useState("");
  const [puestosDeEstacionamiento, setPuestosDeEstacionamiento] = useState("");
  const [pozoDeAgua, setpozoDeAgua] = useState(false);
  const [plantaElectrica, setPlantaElectrica] = useState(false);
  const [piso, setPiso] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [metros, setMetros] = useState("");
  const [estado, setEstado] = useState("");
  const [titulo, setTitulo] = useState("");
  const [precio, setPrecio] = useState("");
  const [loader, setLoader] = useState(false);
  const [loader2, setLoader2] = useState(false);
  const [loader3, setLoader3] = useState(false);
  // const [cargaImagen, setCargaImagen] = useState(false);
  const [error, setError] = useState(false);
  const [test, setTest] = useState([]);
  const [test2, setTest2] = useState([]);
  const [test3, setTest3] = useState([]);
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [user_id, setUserID] = useState("");

  useEffect(() => {
    const detectarUsuario = async () => {
      const { data, error } = await supabase.auth.getUser();
      const usuarioID = await data.user.id;
      if (data) {
        setUserID(usuarioID);
        console.log(user_id, usuarioID);
      }
    };
    detectarUsuario();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.from("Apartamentos").insert([
      {
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
        titulo,
        estado,
        precio,
        user_id,
      },
    ]);
    if (data !== null) {
      alert("datos guardados con exito");
    }
    if (error) {
      setError(true);
    }
    handleReset();
  };

  useEffect(() => {
    if (test.length !== 0) {
      setLoader(true);
      console.log(test);
    }
  }, [test]);

  useEffect(() => {
    if (test2.length !== 0) {
      setLoader2(true);
    }
  }, [test2]);

  useEffect(() => {
    if (test3.length !== 0) {
      setLoader3(true);
    }
  }, [test3]);

  const uploadImage = async (e, valor) => {
    let file = e.target.files[0];
    const { data, error } = await supabase.storage
      .from("images")
      .upload(`public/${captador}/${nombre}/${valor}`, file);
    if (data) {
      setLoader(false);
      setChecked(true);
      console.log("subida exitosamente");
    }
    if (error) {
      console.log(error);
    }
  };
  const uploadImage2 = async (e, valor) => {
    let file = e.target.files[0];
    const { data, error } = await supabase.storage
      .from("images")
      .upload(`public/${captador}/${nombre}/${valor}`, file);
    if (data) {
      setLoader2(false);
      setChecked2(true);
      console.log("subida exitosamente");
    }
    if (error) {
      console.log(error);
    }
  };
  const uploadImage3 = async (e, valor) => {
    let file = e.target.files[0];
    const { data, error } = await supabase.storage
      .from("images")
      .upload(`public/${captador}/${nombre}/${valor}`, file);
    if (data) {
      setLoader3(false);
      setChecked3(true);
      console.log("subida exitosamente");
    }
    if (error) {
      console.log(error);
    }
  };

  const handleReset = () => {
    setNombre("");
    setCaptador("");
    setTipo("");
    setDescripcion("");
    setHabitaciones("");
    setBaños("");
    setPuestosDeEstacionamiento("");
    setpozoDeAgua(false);
    setPlantaElectrica(false);
    setPiso("");
    setUbicacion("");
    setMetros("");
    setTitulo("");
    setEstado("");
    setPrecio("");
    setChecked(false);
    setChecked2(false);
    setChecked3(false);
    setLoader3(false);
    setLoader2(false);
    setLoader(false);
    // setError(false)
  };

  return (
    <div>
      <Topbar />
      <div className="mb-5">
        <div className="container d-flex flex-wrap justify-content-center">
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
                  required
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
                  required
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
                  required
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
                  required
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
                required
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
                  required
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
                  max="100"
                  placeholder="Habitaciones"
                  name="habitaciones"
                  onChange={(e) => {
                    setHabitaciones(e.target.value);
                  }}
                  value={habitaciones}
                  required
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
                  max="100"
                  placeholder="Baños"
                  onChange={(e) => {
                    setBaños(e.target.value);
                  }}
                  name="baños"
                  value={baños}
                  required
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
                  max="100"
                  placeholder="Puestos de Estacionamiento"
                  name="puestosDeEstacionamiento"
                  onChange={(e) => {
                    setPuestosDeEstacionamiento(e.target.value);
                  }}
                  value={puestosDeEstacionamiento}
                  required
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
                  required
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
                  required
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
                  required
                />
              </FloatingLabel>
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
            <div className="d-flex flex-column mx-auto">
              {captador === "" && nombre === "" ? (
                <Form.Group controlId="formFileMultiple" className="mb-3 mt-5">
                  <Form.Label className="text-center">
                    Suba Multiple Imagenes del Inmueble
                  </Form.Label>
                  <Form.Control
                    type="file"
                    disabled
                    accept="image/jpeg, image/jpg, image/png"
                    // value={upload}
                    onChange={(e) => {
                      setTest(e.target.files[0]);
                      //uploadImage(e);
                    }}
                    required
                  />
                </Form.Group>
              ) : (
                <Form.Group controlId="formFileMultiple" className="mb-3 mt-5">
                  <Form.Label className="text-center">
                    Suba la primera imagen
                  </Form.Label>
                  <div className="d-flex">
                    <Form.Control
                      type="file"
                      accept="image/jpeg, image/jpg, image/png"
                      onChange={(e) => {
                        let valor = 1;
                        uploadImage(e, valor);
                        setTest(e.target.files[0]);
                      }}
                      required
                      disabled={checked == true}
                    />
                    <div className="loader">
                      {loader ? <div className="lds-dual-ring"></div> : null}
                    </div>
                    <div className="loader">
                      {checked ? (
                        <CheckIcon className="text-success my-auto fs-1" />
                      ) : null}
                    </div>
                  </div>
                  <Form.Label className="text-center">
                    Suba la primera imagen
                  </Form.Label>
                  <div className="d-flex">
                    <Form.Control
                      type="file"
                      accept="image/jpeg, image/jpg, image/png"
                      onChange={(e) => {
                        let valor = 2;
                        uploadImage2(e, valor);
                        setTest2(e.target.files[0]);
                      }}
                      required
                      disabled={checked2 == true}
                    />
                    <div className="loader">
                      {loader2 ? <div className="lds-dual-ring"></div> : null}
                    </div>
                    <div className="loader">
                      {checked2 ? (
                        <CheckIcon className="text-success my-auto fs-1" />
                      ) : null}
                    </div>
                  </div>
                  <Form.Label className="text-center">
                    Suba la primera imagen
                  </Form.Label>
                  <div className="d-flex">
                    <Form.Control
                      type="file"
                      accept="image/jpeg, image/jpg, image/png"
                      onChange={(e) => {
                        let valor = 3;
                        uploadImage3(e, valor);
                        setTest3(e.target.files[0]);
                      }}
                      required
                      disabled={checked3 == true}
                    />
                    <div className="loader">
                      {loader3 ? <div className="lds-dual-ring"></div> : null}
                    </div>
                    <div className="loader">
                      {checked3 ? (
                        <CheckIcon className="text-success my-auto fs-1" />
                      ) : null}
                    </div>
                  </div>
                </Form.Group>
              )}
            </div>
            <div className="d-flex mb-2">
              <Form.Check
                type="checkbox"
                id="default-checkbox"
                label="Pozo de Agua"
                name="pozoDeAgua"
                className="me-2"
                onChange={(e) => {
                  setpozoDeAgua(e.target.checked);
                }}
                value={pozoDeAgua}
              />
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
            </div>
            <div className="d-flex">
              <Button
                value="Enviar"
                className="w-50 me-2 btn-success"
                type="submit"
              >
                Guardar
              </Button>
              <Button
                onClick={handleReset}
                className="w-50 btn-warning"
                type="reset"
                value="Limpiar"
              >
                Limpiar
              </Button>
            </div>
          </Form>
        </div>
        {error ? <Error /> : null}
      </div>
    </div>
  );
};
