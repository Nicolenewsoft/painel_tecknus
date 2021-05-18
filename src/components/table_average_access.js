import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import api from "../services/api.json";
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
              {api.visualizacoes_por_estado[0].ceara}
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
              {api.visualizacoes_por_estado[1].goias}
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
              {api.visualizacoes_por_estado[2].rio_de_janeiro}
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
              {console.log(api.visualizacoes_por_estado)}
             {api.visualizacoes_por_estado[3].sao_paulo}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
