import React from "react";
import ContainerUltimosAcessos from "../../components/container_ultimos_acessos";
import logoEnel from "../../assets/logo_enel.png";
import Menu from "../../components/menu";
import Divider from "@material-ui/core/Divider";
import { useHistory } from "react-router-dom";

export default function UltimosAcessos() {
  const history = useHistory();

  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to left, #E61400B3, #FF5A0FB3 70%) ",
        width: "100%",
        height: "100%",
      }}
    >
      <img
        src={logoEnel}
        alt="Logo Enel"
        style={{
          marginLeft: "45%",
          paddingBottom: "2%",
          paddingTop: "25%",
          marginTop: "-24%",
        }}
      />
      <Menu />
      <Divider />
      <ContainerUltimosAcessos />
    </div>
  );
}
