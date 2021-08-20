import React from 'react';
import Video from './inc/Video';
import { useEffect } from "react";

function ScrollToTopOnMount() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
    return null;
  }

function Solucoes() {
    return (
        <>
            <ScrollToTopOnMount />
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading">Apresentação sobre o ZM Pay</h3>
                            <div className="underline mx-auto"></div>
                            <p className="text1">
                                Clique para ver o vídeo, e saber mais sobre a plataforma de recebimentos PIX.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Video />
        </>
    );
}

export default Solucoes;