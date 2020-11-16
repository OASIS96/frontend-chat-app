import React from "react";
import '../scss/components/login-form-component.scss';

export const FormLoginComponent = () => {
  return (
    <form className="form_login_component_container">
      <div className="form_control">
        <div className="input_container">
          <input type="text" required/>
          <label htmlFor="">
            <span>Email</span>
          </label>
        </div>
      </div>

      <div className="form_control">
        <div className="input_container">
          <input type="password" required/>
          <label htmlFor="">
            <span>Contraseña</span>
          </label>
        </div>
      </div>
      <button type="submit">Ingresar</button>
    </form>
  );
};
