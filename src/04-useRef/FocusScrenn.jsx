import { useRef } from "react";


/* ******************************************************************************** */
/* * DEV: ERICK ESCOBAR                                                      * */
/* * * */
/* * useRef se utiliza para crear una referencia mutable que persiste entre       * */
/* * renderizados.                                                                * */
/* * Se usa comúnmente para acceder a elementos del DOM directamente o para      * */
/* * almacenar valores que no causan re-renderizado cuando cambian.               * */
/* * La referencia se mantiene durante todo el ciclo de vida del componente.      * */
/* * * */
/* * Casos de uso comunes:                                                        * */
/* * 1. Acceder a un elemento del DOM directamente.                               * */
/* * 2. Mantener un valor mutable sin provocar re-renderizados.                   * */
/* * 3. Almacenar el valor anterior de un prop o estado.                          * */

export const FocusScrenn = () => {

    const inputRef = useRef();


  return (
    <>
      <h1>Focus Screen</h1>
      <hr />
      <input
      ref={inputRef}
        type="text"
        placeholder="Ingrese su nombre"
        className="form-control"
      />
      <button className="btn btn-primary mt-2" onClick={() => inputRef.current.select()}>Set Focus</button>

    </>
  );
};
