import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";

const useStyles = makeStyles({
    spacing: {
        paddingLeft: "450px"
    
    },
  divider: {
    color: "red",
    width: "100%",
  },
});

export function Divisions(props) {
  const classes = useStyles(props);

  return (
    <List>
      <ListItem>
        <ListItemAvatar>
          <Avatar></Avatar>
        </ListItemAvatar>
        <ListItemText primary="Nome" secondary="Área"/>
        <ListItemText secondary="Data e hora" classes={{root:classes.spacing}}/>
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar></Avatar>
        </ListItemAvatar>
        <ListItemText primary="Nome" secondary="Área" />
        <ListItemText secondary="Data e hora" classes={{root:classes.spacing}}/>
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar></Avatar>
        </ListItemAvatar>
        <ListItemText primary="Nome" secondary="Área" />
        <ListItemText secondary="Data e hora" classes={{root:classes.spacing}}/>
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar></Avatar>
        </ListItemAvatar>
        <ListItemText primary="Nome" secondary="Área" />
        <ListItemText secondary="Data e hora" classes={{root:classes.spacing}}/>
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
}
