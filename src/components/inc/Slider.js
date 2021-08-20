import React from 'react';
import Capa1 from '../Images/capa1.png';
import Capa2 from '../Images/capa2.png';
import Capa3 from '../Images/capa3.png';

function Slider() {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={Capa1} className="d-block w-100" alt="capa1" />
                </div>
                <div class="carousel-item">
                    <img src={Capa2} className="d-block w-100" alt="capa2" />
                </div>
                <div class="carousel-item">
                    <img src={Capa3} className="d-block w-100" alt="capa3" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>

        );
    }
    
export default Slider;