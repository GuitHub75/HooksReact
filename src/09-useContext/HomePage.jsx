import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const HomePage = () => {
  const { hola, user } = useContext(UserContext);

  return (
    <>
      <h1>Home Page</h1>
      <hr />
      <p>data from user context:</p>
      <pre aria-label="pre" className="code">
        {JSON.stringify(user, null, 2)}
      </pre>
    </>
  );
};
