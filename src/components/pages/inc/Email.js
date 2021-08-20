import React from 'react';
import {Link} from 'react-router-dom';
import emailjs from "emailjs-com";

function Email(){

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_hwe2ihu', 'template_szt5k5k', e.target, 'user_DOYyXZ766oYlEsfrErQfG')
        .then((result) => {
            alert('Mensagem enviada com sucesso, assim que possível entraremos em contato!');
        }, (error) => {
            alert('Mensagem não enviada!');
        });
        e.target.reset();
    }


    return(
        <div>
            <section className="section bg-c-light border-top">
                <div className="container">
                    <div className="card shadow">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <form onSubmit={sendEmail}>
                                        <div className="form-grup mb-3">
                                            <h6>Mensagem</h6>
                                            <hr />
                                            <label for="">Nome</label>
                                            <input type="text" name="name" className="form-control" placeholder="Nome" />
                                        </div>
                                        <div className="form-grup mb-3">
                                            <label for="">Celular</label>
                                            <input type="text" name="celular" className="form-control" placeholder="Celular" />
                                        </div>
                                        <div className="form-grup mb-3">
                                            <label for="">E-mail</label>
                                            <input type="text" name="email" className="form-control" placeholder="E-mail" />
                                        </div>
                                        <div className="form-grup">
                                            <label for="">Mensagem</label>
                                            <textarea rows="3" name="mensagem" className="form-control" placeholder="Mensagem..."></textarea>
                                        </div>
                                        <div className="form-grup py-3">
                                            <input type="submit" className="btn btn-dark shadow w-100" value="Enviar mensagem" />
                                        </div>
                                    </form>
                                </div>
                                
                                <div className="col-md-6 border-start" id="endereco">
                                    <h5 className="main-heading1">Endereço</h5>
                                    <div className="underline"></div>
                                    <p>
                                        Rua Clóvis da Fonseca, 240 - 1°Andar - Sala 204
                                    </p>
                                    <p>
                                        Contato: 43. 98447-7739 | Também é WhatsApp
                                    </p>
                                    <p>
                                        E-mail: contato@zmpay.com.br
                                    </p>
                                </div>
                            </div>
                        </div>                        
                    </div>                
                </div>
            </section>
        </div>
    );
}

export default Email;