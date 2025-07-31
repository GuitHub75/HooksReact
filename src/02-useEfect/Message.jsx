import { useEffect } from "react";

export const Message = () => {
  useEffect(() => {
    const onMauseMove = ({ x, y }) => {
      const coords = { x, y };
      console.log(coords);
    };

    window.addEventListener("mousemove", onMauseMove);
    return () => {
      window.removeEventListener("mousemove", onMauseMove);
    };
  }, []);

  return (
    <>
      <h3>Usuario ya existe</h3>
      <p>Por favor, elige otro nombre de usuario.</p>
    </>
  );
};
