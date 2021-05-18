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
    boxShadow: "0px 0px 0px 0px  ",
  },
});

export default function BasicTable(props) {
  const classes = useStyles();
  const [visualizacoes, setVisualizacoes] = useState(api.quantidade_posts_visualizados[0].mes);

  useEffect(()=>{changePosts(props.value)}, [props.value])

  function changePosts(day){
    if(day === 30){
      setVisualizacoes(api.quantidade_posts_visualizados[0].mes)
    } 
    if(day === 7){
      setVisualizacoes(api.quantidade_posts_visualizados[0].semana)
    } 
    if(day === 1){
      setVisualizacoes(api.quantidade_posts_visualizados[0].dia)
    } 

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
              Posts visualizados
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {console.log(visualizacoes)}
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
                  {item.quantidade}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
