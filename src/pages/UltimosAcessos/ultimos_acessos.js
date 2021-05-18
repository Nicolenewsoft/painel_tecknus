import React from "react";
import ContainerUltimosAcessos from "../../components/container_ultimos_acessos";
import Menu from "../../components/menu";
import Divider from "@material-ui/core/Divider";
import { useHistory } from "react-router-dom";
import Logo from "../../assets/logo2.png";

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
      <ContainerUltimosAcessos />
    </div>
  );
}
