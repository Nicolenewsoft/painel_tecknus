import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import RankingAcessos from './pages/UltimosAcessos/ranking_de_acessos';
import UltimosAcessos from './pages/UltimosAcessos/ultimos_acessos';
import MediaOds from './pages/UltimosAcessos/media_ods';
import OdsVisualizadas from './pages/UltimosAcessos/ods_visualizadas';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact >
                   <UltimosAcessos/>
                </Route>
                <Route path="/ranking" exact>
                    <RankingAcessos/>
                </Route>
                <Route path="/media_de_ods" exact>
                    <MediaOds/>
                </Route>
                <Route path="/ods_visualizadas" exact>
                    <OdsVisualizadas/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}