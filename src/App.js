import React from 'react';
import './App.css';
import Navbar from './components/inc/Navbar';
import Home from './components/pages/Home';
import Solucoes from './components/pages/Solucoes';
import Contato from './components/pages/Contato';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Footer from './components/inc/Footer';
import Cadastro from './components/pages/Cadastro';
import reportWebVitals from './reportWebVitals';

function App() {
  return (
    <Router>
      <>
        <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/solucoes">
              <Solucoes />
            </Route>

            <Route path="/contato">
              <Contato />
            </Route>

            <Route path="/cadastro">
              <Cadastro />
            </Route>
          </Switch>
        <Footer />        
      </>
      
    </Router>
  );

}

export default App;


  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
