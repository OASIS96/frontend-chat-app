import React from "react";
import { FormLoginComponent } from "../components/form-login.component";
import "../scss/pages/login-page.scss";
import IconWhatsapp from "../assets/icons/whatsapp.svg";

export const LoginPage = () => {
  return (
    <div className="login_page_container">
      <div className="container">
        <div className="logo_container">
          <IconWhatsapp />
        </div>
        <FormLoginComponent />
        <p className="register_text">
          Aun no tienes una cuenta? <a href="">Registrate</a>
        </p>
      </div>
    </div>
  );
};
