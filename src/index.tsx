import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.scss';
import { Home } from './app/page/Home';
import { AtualizaPessoas } from './app/page/UpdateScreen';
import { AdicionarPessoa } from './app/page/Add';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/adicionar" component={AdicionarPessoa} />
        <Route path="/editarPessoa/:idParametro" component={AtualizaPessoas} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
