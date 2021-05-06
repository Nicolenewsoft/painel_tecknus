import React from "react";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import logoUltimosAcessos from "../assets/logo_ultimos_acessos.png";
import logoMediaOds from "../assets/logo_media_ods.png";
import logoOdsVisualizadas from "../assets/logo_ods_visualizadas.png";
import logoRealidadeAumentada from "../assets/logo.png";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    marginRight: theme.spacing(2),
    marginLeft: "107px",
    height: "53vh",
    marginBlock: "-409px",
    width: "74px",
    paddingTop: "1px",
    background: "#FFFFFF",
    boxShadow: "0px 10px 40px #1f1414b8",
    borderRadius: "20px",
    opacity: "0.5",
  },
  menu_logos: {
    height: "15px",
    marginTop: "21px",
    marginLeft: "8px",
    paddingTop: "17px",
    paddingBlock: "20px",
  },
  logo: {
    paddingBottom: "22px",
  },
}));

export default function MenuListComposition() {
  const classes = useStyles();
  const [open] = React.useState(false);
  const anchorRef = React.useRef(null);
  const history = useHistory();

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <MenuList className={classes.menu_logos}>
          <MenuItem className={classes.logo} onClick={() => history.push("/")}>
            <img
              src={logoRealidadeAumentada}
              alt="logo realidade aumentada"
              style={{
                height: "45px",
                marginLeft: "-9px",
                marginTop: "-4px",
                marginBottom: "26px",
              }}
            />
          </MenuItem>
          <MenuItem
            className={classes.logo}
            onClick={() => history.push("/ranking")}
          >
            <img
              src={logoUltimosAcessos}
              alt="logo últimos acessos"
              style={{ height: "15px" }}
            />
          </MenuItem>
          <MenuItem
            className={classes.logo}
            onClick={() => history.push("/media_de_ods")}
          >
            <img src={logoMediaOds} alt="logo média de ods" />
          </MenuItem>
          <MenuItem
            className={classes.logo}
            onClick={() => history.push("/ods_visualizadas")}
          >
            <img
              src={logoOdsVisualizadas}
              alt="logo ods visualizadas"
              style={{ height: "21px" }}
            />
          </MenuItem>
        </MenuList>
      </Paper>
      <div></div>
    </div>
  );
}
