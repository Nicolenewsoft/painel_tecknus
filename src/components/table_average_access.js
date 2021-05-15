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
    boxShadow: "0px 0px 0px px rgb(0 0 0 / 20%), ",
  },
});

export default function BasicTable() {
  const classes = useStyles();
  const [access, setAccess] = useState([]);

  useEffect(() => getAccess(), []);

  async function getAccess() {
    const response = await api.get(
      "/suporterealidadeaumentada/media-acessos-por-estado"
    );
    console.log(response);
    setAccess(response.data.quantidade_de_acessos_por_estado);
  }

  return (
    <TableContainer component={Paper} classes={{ root: classes.border }}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: "bold" }}>Estado</TableCell>
            <TableCell
              style={{
                fontWeight: "bold",
                paddingLeft: "30px",
              }}
            >
              Acessos por estado
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              Ceará
            </TableCell>
            <TableCell
              component="th"
              scope="row"
              style={{ paddingLeft: "70px" }}
            >
              {`${access.porcentagem_ceara} %`}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Goiás
            </TableCell>
            <TableCell
              component="th"
              scope="row"
              style={{ paddingLeft: "70px" }}
            >
              {`${access.porcentagem_goias} %`}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              São Paulo
            </TableCell>
            <TableCell
              component="th"
              scope="row"
              style={{ paddingLeft: "70px" }}
            >
              {`${access.porcentagem_sao_paulo} %`}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Rio de Janeiro
            </TableCell>
            <TableCell
              component="th"
              scope="row"
              style={{ paddingLeft: "70px" }}
            >
              {`${access.porcentagem_rio} %`}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
