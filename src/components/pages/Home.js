import React from 'react';
import Slider from '../inc/Slider';
import Servico from './inc/Servico';
import Pricing from './inc/Pricing';
import {Link} from 'react-router-dom';
import { useEffect } from "react";

function ScrollToTopOnMount() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
    return null;
  }

function Home() {
    return (
        <>
            <ScrollToTopOnMount />
            <Slider />
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading">Visualização Rápida de Recebimentos PIX</h3>
                            <div className="underline mx-auto"></div>
                            <p className="text1">
                                Ter recebimentos por PIX, sem ter que a todo momento verificar se está em sua conta.<br></br>
                                Clique no Botão Soluções e veja nosso vídeo explicativo do ZM Pay.
                            </p>
                            <Link to="/Solucoes" className="btn btn-dark shadow">Soluções</Link>
                        </div>
                    </div>
                </div>
            </section>
            <Servico />
            <Pricing />
        </>
    );
}

export default Home;