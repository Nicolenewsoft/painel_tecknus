import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import api from "../services/api";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  border: {
    boxShadow: "0px 0px 0px 0px  ",
  },
});

export default function BasicTable() {
  const classes = useStyles();
  const [access, setAccess] = useState([]);

  useEffect(() => getAccess(), []);

  async function getAccess() {
    const response = await api.post("/suporterealidadeaumentada/login-painel", {
      br: "BR05021998",
    });
    console.log(response);
    setAccess(response.data.usuarios_ultimo_acesso);
  }

  return (
    <TableContainer component={Paper} classes={{ root: classes.border }}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: "bold" }}>Nome</TableCell>
            <TableCell
              style={{
                fontWeight: "bold",
                paddingLeft: "30px",
              }}
            >
              Área
            </TableCell>
            <TableCell
              style={{
                fontWeight: "bold",
                paddingLeft: "30px",
              }}
            >
              Diretoria
            </TableCell>
            <TableCell
              style={{
                fontWeight: "bold",
                paddingLeft: "30px",
              }}
            >
              Estado
            </TableCell>
            <TableCell
              style={{
                fontWeight: "bold",
                paddingLeft: "30px",
              }}
            >
              Último acesso
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {access.map((item, index) => (
            <TableRow>
              <TableCell component="th" scope="row">
                {item.nome}
              </TableCell>
              <TableCell
                component="th"
                scope="row"
                style={{ paddingLeft: "70px" }}
              >
                {item.area}
              </TableCell>
              <TableCell
                component="th"
                scope="row"
                style={{ paddingLeft: "70px" }}
              >
                {item.diretoria}
              </TableCell>
              <TableCell
                component="th"
                scope="row"
                style={{ paddingLeft: "70px" }}
              >
                {item.estado}
              </TableCell>
              <TableCell
                component="th"
                scope="row"
                style={{ paddingLeft: "70px" }}
              >
                {item.ultimo_acesso}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
