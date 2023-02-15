import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Estilos/HomePage.css";
import { Topbar } from "./Navbar";
import { supabase } from "../supabase/createClient";

export const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const detectarUsuario = async () => {
      const { data, error } = await supabase.auth.getUser();
      if(data.user == null){
        navigate("/Login")
      }
      console.log(data);
    };
    detectarUsuario()
  }, [navigate]);

  return (
    <div>
      {" "}
      <Topbar></Topbar>
      <main className="container homePage">
        <section>
          <article>
            <h1>Bienvenido</h1>
          </article>
        </section>
      </main>
    </div>
  );
};
