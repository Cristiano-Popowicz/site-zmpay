import React from 'react';
import PC from '../../Images/PC.png';
import Recebimento from '../../Images/recebimento.png';
import Tempo from '../../Images/tempo.png';

function Servico(){
    return(
        <section className="section bg-c-light border-top">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mb-4 text-center">
                        <h3 className="main-heading">Entendendo a Plataforma</h3>
                        <div className="underline mx-auto"></div>
                    </div>
                    <div className="col-md-4 text-center">
                        <h6 className="text2">Painel Administrativo</h6>
                        <p>
                            Criando um cadastro, poderá ter acesso através de login e senha do painel Administrativo Web.
                        </p>
                        <img src={PC} alt="PC" id="PC" width="50%" />
                    </div>
                    <div className="col-md-4 text-center">
                        <h6 className="text2">Controle de Recebimentos</h6>
                        <p>
                             Pelo painel Administrativo do ZM Pay é possível acompanhar em tempo real os recebimentos.
                        </p>
                        <img src={Recebimento} alt="Recebimento" id="Recebimento" width="40%" />
                    </div>
                    <div className="col-md-4 text-center">
                        <h6 className="text2">Acesso 24 horas por dia</h6>
                        <p>
                            Veja pelo painel a qualquer momento do dia seus recebimentos via PIX, sem nenhum incômodo.
                        </p>
                        <img src={Tempo} alt="Tempo" id="Tempo" width="40%" />
                    </div>
                </div>                
            </div>
        </section>
    );
}

export default Servico;