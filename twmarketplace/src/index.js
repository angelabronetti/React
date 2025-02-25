import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import Login from './pages/login/Login';
import Cadastro from './pages/cadastro/Cadastro'
// import Desh from './pages/desh';
import Perfiluser from './pages/perfilusuario/Perfiluser';
// import DescricaoProduto from './pages/descricaoprodu';
import NaoEncontrado from './pages/naoencontrado/NaoEncontrado';
import App from './App'

const Ways = (
    <Router>
        <div>
            <Switch>
                <Route exact path = "/" component = {App}/>
                <Route path = "/login" component = {Login}/>
                <Route path = "/cadastro" component = {Cadastro}/>
                {/* <Route path = "/desh" component = {Desh}/> */}
                <Route path = "/perfilusuario" component = {Perfiluser}/>
                {/* <Route path = "/descricaoproduto" component = {DescricaoProduto}/> */}
                <Route component = {NaoEncontrado}/>
            </Switch>
        </div>
    </Router>
);


ReactDOM.render(Ways, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
