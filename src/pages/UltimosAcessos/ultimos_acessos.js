import React from 'react';
import { SimpleContainer } from '../../components/container';
import logoEnel from '../../assets/logo_enel.png';
import Menu from '../../components/menu';
import Divider from '@material-ui/core/Divider';
import Logout from '../../assets/logout.png';

export default function UltimosAcessos(){
    return(
        <div style={{backgroundImage: "linear-gradient(to left, #FF6347, #FF5A0FB3 70%)"}}>
            <img src={logoEnel} alt="Logo Enel" style={{marginLeft: "653px", paddingBottom: "20px", paddingTop: "53px", height: "137px", marginTop: "-27px"}}/>
            <img src={Logout} alt="Imagem logout"  style={{marginLeft: "450px", marginBottom: "38px"}}/>
            <Divider />
            <SimpleContainer Title="Últimos acessos"/>
            <Menu/>
        </div>
                    
    )
}
