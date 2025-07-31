import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setformState] = useState({
    username: "eescobar",
    email: "eescobar2500@gmail.com",
  });

  const { username, email } = formState;

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setformState({
      ...formState,
      [name]: value,
    });
  };
/* ******************************************************************************** */
/* * Propietario: ERICK ESCOBAR                                                   * */
/* * * */
/* * Un arreglo vacío significa que el efecto se ejecutará una sola vez al       * */
/* * montar el componente.                                                        * */
/* * Es recomendable usarlo para inicializar datos o realizar una acción que      * */
/* * solo necesita ejecutarse una vez.                                            * */
/* * Si se pasan dependencias, el efecto se ejecutará cada vez que cambien       * */
/* * esas dependencias.                                                           * */
/* * * */
/* * Acá tres ejemplos de uso de useEffect:                                       * */
/* * 1. Ejecutar una acción al montar el componente.                              * */
/* * 2. Ejecutar una acción cuando cambie el estado del formulario.               * */
/* * 3. Ejecutar una acción cuando cambie un campo específico del formulario.     * */
/* ******************************************************************************** */
  useEffect(() => {
   // console.log("useEffect executed");
  },[])

  useEffect(() => {
    //console.log("formState changed");
  }
, [formState]);

  useEffect(() => {
    //console.log("username changed");
  }, [username]);

  useEffect(() => {
    //console.log("email changed");
  }, [email]);

  
  

  return (
    <>
      <h1>Simple Form</h1>
      <p>
        This component will demonstrate a simple form with controlled inputs.
      </p>
      <hr />
      <input
        type="text"
        placeholder="Enter your userename"
        className="form-control"
        name="username"
        autoComplete="on"
        value={username}
        onChange={handleInputChange}
      />
      <input
        type="email"
        placeholder="Enter your email"
        className="form-control mt-2"
        name="email"
        autoComplete="on"
        value={email}
        onChange={handleInputChange}
      />
      <hr />
      {
        username === "coco" && <Message />
      }
    </>
  );
};
