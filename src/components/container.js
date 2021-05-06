import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Divisions } from "../components/divider";

class Title extends Component {
  render() {
    return (
      <p
        style={{
          fontSize: "25px",
          font: "Source Sans Pro",
          marginBottom: "-28px",
        }}
      >
        {this.props.text}
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
                backgroundImage:
                  "linear-gradient(to left, #E61400B3, #FF5A0FB3 70%)",
                alignItems: "center",
                marginTop: "29px",
                marginLeft: "306px",
                marginRight: "226px",
                borderRadius: "18px",
                padding: "25px",
                paddingTop: "1px",
                font: "30px / 37px Nunito, sans-serif",
                textAlign: "center",
                color: "#FFFFFF",
                boxShadow: "0px 0px 9px 0px #4233339e",
              }}
            >
              <Title text={this.props.Title} />
              <Paper
                style={{
                  background: "white",
                  alignItems: "center",
                  padding: "25px",
                  borderRadius: "4px",
                  marginRight: "17px",
                  marginLeft: "17px",
                  marginTop: "48px",
                  boxShadow: "1px 1px 9px 0px #4f4f4f",
                }}
              >
                <Divisions />
              </Paper>
            </Paper>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}
