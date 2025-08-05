import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
  const { user, setuser } = useContext(UserContext);

  return (
    <>
      <h1>Login Page</h1>
      <hr />
      <p>data from user context:</p>
      <pre aria-label="pre" className="code">
        {JSON.stringify(user, null, 2)}
      </pre>
      <hr />
      <button
        className="btn btn-primary"
        onClick={() => setuser({ name: "John Doe", email: "coco@coco.com0" })}
      >
        Set User
      </button>
    </>
  );
};
