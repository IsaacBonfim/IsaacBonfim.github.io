import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Contato from './Pages/Contato';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Projetos from './Pages/Projetos';
import Sobre from './Pages/Sobre';

function Routes() {
  return (
    <Switch>
      <Route exact path="/portfolio/" component={ Home } />
      <Route exact path="/portfolio/Contato" component={ Contato } />
      <Route exact path="/portfolio/Projetos" component={ Projetos } />
      <Route exact path="/portfolio/Sobre" component={ Sobre } />
      <Route exact path="*" component={ NotFound } />
    </Switch>
  );
}

export default Routes;