import React from 'react';
import {Link} from 'react-router-dom';
import Face from '../Images/facebook.png';
import Insta from '../Images/instagram.png';
import Youtube from '../Images/youtube.png';

function Footer(){
    return(
        <section className="section footer bg-dark text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h6>ZM Pay</h6>
                        <hr/>
                        <p>
                            Soluções para o dia a dia de recebimentos por Pix,
                            nossa plataforma gerencia para que todos os nossos
                            clientes possam ficar tranquilos com essa ferramenta
                            de recebimentos tão útil.
                        </p>
                    </div>
                    <div className="col-md-2">
                        <h6>Clique nos Links</h6>
                        <hr/>
                        <div className="mb-2"><Link to="/">Home</Link></div>
                        <div className="mb-2"><Link to="/solucoes">Soluções</Link></div>
                        <div className="mb-2"><Link to="/contato">Contato</Link></div>
                    </div>
                    <div className="col-md-4">
                        <h6>Contato</h6>
                        <hr/>
                        <div className="mb-2"><p className="text-white mb-1">Rua Clóvis da Fonseca, 240 | 1° Andar - Sala 204</p></div>
                        <div className="mb-2"><p className="text-white mb-1">43. 98447-7739</p></div>
                        <div className="mb-2"><p className="text-white mb-1">contato@zmpay.com.br</p></div>
                    </div>
                    <div className="col-md-2">
                        <h6>Redes Sociais</h6>
                        <hr/>
                        <div className="mb-2">
                            <img src={Face} alt="Face" width="20" />
                            <Link to="/" class="face">Facebook</Link>
                        </div>
                        <div className="mb-2">
                            <img src={Insta} alt="Insta" width="20" />
                            <Link to="/" class="insta">Instagram</Link>
                        </div>
                        <div className="mb-2">
                            <img src={Youtube} alt="Youtube" width="20" />
                            <Link to="/" class="youtube">Youtube</Link>
                        </div>
                    </div>
                </div>
                <div className="copy text-center">© Todos os direitos reservados - 2021 | ZM Pay</div>
            </div>
        </section>
    );
}

export default Footer;