import React, { Component, useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Table from "./table_ods";
import Abas from "./abas";

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
        Post's visualizados
      </p>
    );
  }
}

export default function ContainerMediaOds() {
  const [value, setValue] = useState(30);
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
                background: "white",
                alignItems: "center",
                padding: "25px",
                borderRadius: "13px",
                marginRight: "17px",
                marginLeft: "17px",
                marginTop: "48px",
                boxShadow: "1px 1px 9px 0px #4f4f4f",
              }}
            >
              <Abas
                onClickDay={() => setValue(1)}
                onClickWeek={() => setValue(7)}
                onClickMonth={() => setValue(30)}
              />
              <Table value={value} />
            </Paper>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
