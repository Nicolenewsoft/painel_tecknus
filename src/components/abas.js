import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  abas: {
    borderRadius: "15px",
    borderStyle: "solid",
    borderWidth: "thin",
    borderColor: "#FF5A0FB3",
    width: "80%",
    marginLeft: "15%",
    marginTop: "-45px",
  },
});

export default function DisabledTabs(props) {
  const [value, setValue] = React.useState(2);
  const classes = useStyles(props);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log("öi");

    if (newValue === 0) {
      props.onClickDay();
    }
    if (newValue === 1) {
      props.onClickWeek();
    }
    if (newValue === 2) {
      props.onClickMonth();
    }
  };

  return (
    <Paper square classes={{ root: classes.abas }}>
      <Tabs
        value={value}
        textColor="inherit"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label="Diário" />
        <Tab label="Semanal" />
        <Tab label="Mensal" />
      </Tabs>
    </Paper>
  );
}
