import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LanguageIcon from "@material-ui/icons/Language";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import BarChartIcon from "@material-ui/icons/BarChart";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import AddToHomeScreenIcon from "@material-ui/icons/AddToHomeScreen";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  link: {
    display: "flex",
    color: "#fff",
  },
  icon: {
    marginRight: theme.spacing(0.5),

    width: 30,
    height: 30,
    color: "#fff",
  },
}));

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function IconBreadcrumbs() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Breadcrumbs aria-label="breadcrumb" style={{ marginLeft: "10%" }}>
      <Link
        color="inherit"
        href=""
        onClick={() => history.push("/ultimos_acessos")}
        className={classes.link}
      >
        <AddToHomeScreenIcon className={classes.icon} />
        Últimos Acessos
      </Link>
      <Link
        color="inherit"
        href=""
        onClick={() => history.push("/ranking")}
        className={classes.link}
      >
        <BarChartIcon className={classes.icon} />
        Quantidade de acessos
      </Link>
      <Link
        color="inherit"
        href=""
        onClick={() => history.push("/media_de_ods")}
        className={classes.link}
      >
        <LanguageIcon className={classes.icon} />
        Média por estado
      </Link>
      <Link
        color="inherit"
        href=""
        onClick={() => history.push("/ods_visualizadas")}
        className={classes.link}
      >
        <DoneAllIcon className={classes.icon} />
        Quantidade de ODS's visualizadas
      </Link>
      <Link
        color="inherit"
        href="/"
        onClick={() => history.push("/")}
        className={classes.link}
      >
        <ExitToAppIcon className={classes.icon} />
      </Link>
    </Breadcrumbs>
  );
}
