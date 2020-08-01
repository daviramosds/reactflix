import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home/';
import Pagina404 from './components/404'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CadastroVideo from './pages/cadastro/Video'
import CadastroCategoria from './pages/cadastro/Categoria'



ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/categoria" component={CadastroCategoria} exact />
      <Route path="/cadastro/video" component={CadastroVideo} exact />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
