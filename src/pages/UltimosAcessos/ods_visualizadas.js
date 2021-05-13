import React from "react";
import logoEnel from "../../assets/logo_enel.png";
import Menu from "../../components/menu";
import Divider from "@material-ui/core/Divider";
import OdsVisualizadas from "../../components/container_ods_visualizadas";

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
        src={logoEnel}
        alt="Logo Enel"
        style={{
          marginLeft: "584px",
          paddingBottom: "20px",
          paddingTop: "53px",
          height: "137px",
          marginTop: "-27px",
        }}
      />
      <Menu />
      <Divider />
      <OdsVisualizadas />
    </div>
  );
}
