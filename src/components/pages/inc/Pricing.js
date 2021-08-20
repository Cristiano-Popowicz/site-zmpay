import React from 'react';
import {Link} from 'react-router-dom';

function Pricing(){
    return(
        <section className="pricing-table border-top">
            <div className="container">
                <div className="block-heading">
                    <h2>Planos</h2>
                    <p>Clique em contratar e faça o cadastro para ter acesso ao painel administrativo</p>
                </div>
                <div className="row justify-content-md-center">
                    <div className="col-md-5 col-lg-4">
                        <div className="item">
                            <div className="heading">
                                <h3>BASIC</h3>
                            </div>
                            <p>Com o Painel Administrativo do ZM Pay</p>
                            <div className="features">
                                <h4><span className="feature">Suporte</span>: <span className="value">Sim (horário comercial)</span></h4>
                                <h4><span className="feature">Acesso</span>: <span className="value">Sim (Painel Administrativo)</span></h4>
                                <h4><span className="feature">Transação</span>: <span className="value">Sim (R$ 1,29 por transação)</span></h4>
                            </div>
                            <div className="price">
                                <h4>R$ 49,90/mês</h4>
                            </div>
                            <div className="d-grid gap-2">
                                <Link to="/Cadastro" className="btn btn-dark shadow">Contratar</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 col-lg-4">
                        <div className="item">
                            <div className="ribbon">Melhor Valor</div>
                            <div className="heading">
                                <h3>PRO</h3>
                            </div>
                            <p>Com o Painel Administrativo do ZM Pay</p>
                            <div className="features">
                                <h4><span className="feature">Suporte</span>: <span className="value">Sim (horário comercial)</span></h4>
                                <h4><span className="feature">Acesso</span>: <span className="value">Sim (Painel Administrativo)</span></h4>
                                <h4><span className="feature">Transação</span>: <span clclassNameass="value">Sim (R$ 1,19 por transação)</span></h4>
                            </div>
                            <div className="price">
                                <h4>R$ 69,90/mês</h4>
                            </div>
                            <div className="d-grid gap-2">
                                <Link to="/Cadastro" className="btn btn-dark shadow">Contratar</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 col-lg-4">
                        <div className="item">
                            <div className="heading">
                                <h3>PREMIUM</h3>
                            </div>
                            <p>Com o Painel Administrativo do ZM Pay</p>
                            <div className="features">
                                <h4><span className="feature">Suporte</span>: <span className="value">Sim (horário comercial)</span></h4>
                                <h4><span className="feature">Acesso</span>: <span className="value">Sim (Painel Administrativo)</span></h4>
                                <h4><span className="feature">Transação</span>: <span className="value">Sim (R$ 1,09 por transação)</span></h4>
                            </div>
                            <div className="price">
                                <h4>R$ 89,90/mês</h4>
                            </div>
                            <div className="d-grid gap-2">
                                <Link to="/Cadastro" className="btn btn-dark shadow">Contratar</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Pricing;