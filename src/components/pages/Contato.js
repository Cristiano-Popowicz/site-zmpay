import React from 'react';
import Email from './inc/Email';
import { useEffect } from "react";

function ScrollToTopOnMount() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
    return null;
  }

function Contato() {
    return (
        <>
            <ScrollToTopOnMount />
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading">Entre em contato conosco</h3>
                            <div className="underline mx-auto"></div>
                            <p className="text1">
                                Nos envie uma mensagem de sua dúvida, ou se quiser que entremos em contato com você.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Email />
        </>
    );
}

export default Contato;