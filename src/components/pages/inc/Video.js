import React from 'react';

function Video (){
    return(
        <>
            <section className="section bg-c-light border-top">
                <div className="container">
                    <div className="row">
                        <div className="conteudo">
                            <iframe className="iframe" src="https://www.youtube.com/embed/lPr-hL9CZd0"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            ></iframe>
                        </div>
                    </div>                
                </div>
            </section>
        </>
    );
}

export default Video;