import React from 'react';
import Form from './inc/Form';
import { useEffect } from "react";

function ScrollToTopOnMount() {

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
    return null;
  }

function Cadastro() {
    return(
        <div>
            <ScrollToTopOnMount />
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading">Cadastre-se no ZM Pay</h3>
                            <div className="underline mx-auto"></div>
                            <p className="text1">
                                Preencha o Cadastro e clique em cadastrar, agora é só efetuar o pagamento do valor mensal escolhido.<br></br>
                                Após efetuar o pagamento já pode fazer login no Painel Administrativo.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Form />
        </div>
    );
}

export default Cadastro;