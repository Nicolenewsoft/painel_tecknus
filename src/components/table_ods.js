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

export default function BasicTable(props) {
  const classes = useStyles();
  const [visualizacoes, setVisualizacoes] = useState([]);

  useEffect(() => getOds(), [props.value]);

  async function getOds() {
    const response = await api.post(
      "/suporterealidadeaumentada/visualizacoes-por-dia",
      {
        dia: props.value,
      }
    );
    console.log(response);
    setVisualizacoes(response.data.usuarios);
  }

  return (
    <TableContainer component={Paper} classes={{ root: classes.border }}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              style={{
                fontWeight: "bold",
                paddingLeft: "15px",
              }}
            >
              Nome
            </TableCell>
            <TableCell
              style={{
                fontWeight: "bold",
                paddingLeft: "30px",
              }}
            >
              ODS's visualizadas
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {visualizacoes.length === 0 ? (
            <TableRow>
              <TableCell style={{ fontSize: "2vh" }}>
                Sem visualizacoes
              </TableCell>
            </TableRow>
          ) : (
            visualizacoes.map((item, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {item.nome}
                </TableCell>
                <TableCell
                  component="th"
                  scope="row"
                  style={{ paddingLeft: "70px" }}
                >
                  {`${item.list_ods.length}/17`}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
