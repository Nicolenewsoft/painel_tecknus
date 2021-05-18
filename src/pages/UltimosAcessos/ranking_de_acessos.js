import React from "react";
import { SimpleContainer } from "../../components/container";
import Logo from "../../assets/logo2.png";
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
        alt="Logo Tecknus"
        style={{
          marginLeft: "47%",
          paddingBottom: "18px",
          paddingTop: "36px",
          height: "142px",
          width: "11%",
          marginTop: "-9px",
        }}
      />
      <Menu />
      <Divider />
      <SimpleContainer Title="Rankign de acessos" />
    </div>
  );
}
