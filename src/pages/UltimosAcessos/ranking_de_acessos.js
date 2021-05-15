import React from "react";
import { SimpleContainer } from "../../components/container";
import Logo from "../../assets/logo_enel.png";
import Menu from "../../components/menu";
import Divider from "@material-ui/core/Divider";

export default function UltimosAcessos() {
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to left, #E61400B3, #FF5A0FB3 70%)",
        width: "100%",
        height: "100%",
      }}
    >
      <img
        src={Logo}
        alt="Logo Enel"
        style={{
          marginLeft: "43%",
          paddingBottom: "20px",
          paddingTop: "53px",
          height: "159px",
          width: "19%",
          marginTop: "-27px",
        }}
      />
      <Menu />
      <Divider />
      <SimpleContainer Title="Rankign de acessos" />
    </div>
  );
}
