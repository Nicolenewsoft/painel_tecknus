import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Table from "./number_of_accesses";

class Title extends Component {
  render() {
    return (
      <p
        style={{
          fontSize: "25px",
          font: "Source Sans Pro",
          marginBottom: "-12px",
        }}
      >
        Quantidade de acessos
      </p>
    );
  }
}

export class SimpleContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper
              style={{
                backgroundColor: "#ff7f50",
                alignItems: "center",
                marginTop: "1%",
                marginLeft: "20%",
                marginRight: "15%",
                borderRadius: "2vh",
                padding: "1vh 2% 1%",
                paddingBottom: "3%",
                paddingTop: "6vh",
                font: "30px / 0px Nunito, sans-serif",
                textAlign: "center",
                color: "#FFFFFF",
                boxShadow: "0px 0px 9px 0px #4233339e",
              }}
            >
              <Title />
              <Paper
                style={{
                  backgroundImage: "white",
                  alignItems: "center",
                  padding: "5vh",
                  borderRadius: "13px",
                  marginRight: "0vh",
                  marginLeft: "0vh",
                  marginTop: "8vh",
                  boxShadow: "1px 1px 9px 0px #4f4f4f",
                }}
              >
                <Table />
              </Paper>
            </Paper>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}
