import { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
 
  const {formState, onInputChange, onResetForm, username, email, password} = useForm({
    username: '',
    email : '',
    password : ''
  });

  //const {username, email, password} = formState;

  return (
    <>
      <h1>Simple Form</h1>
      <p>
        FORM WITH CUSTOM HOOK - useEffect
      </p>
      <hr />
      <input
        type="text"
        placeholder="Enter your userename"
        className="form-control"
        name="username"
        autoComplete="on"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        placeholder="Enter your email"
        className="form-control mt-2"
        name="email"
        autoComplete="on"
        value={email}
        onChange={onInputChange}
      />
      <input  
        type="password"
        placeholder="Enter your password"
        className="form-control mt-2"
        name="password" 
        autoComplete="on"
        value={password}
        onChange={onInputChange}
      />

      <button onClick={onResetForm}  className="btn btn-primary mt-2">Borrar</button>
  
    </>
  );
};
