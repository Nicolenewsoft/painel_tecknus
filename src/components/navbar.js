import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    appbar: {
        backgroundColor: '#f8f9fa',
        paddingTop: '5px', 
    },
    image: {
        marginLeft: "620px",
    }
}) 

export function Navbar(props){

    const classes = useStyles(props);

    return(
        <AppBar position="static" classes={{root:classes.appbar}}>
            <Typography variant="h6" classes={{root:classes.image}}>
                <img src="https://static1.deway.com.br/imeetingv2/logo-enel.jpeg" alt="Logo enel" top="39px" left="847px"width="177px" height="82px" opacity="1"/>
            </Typography>

        </AppBar>
    )
}



