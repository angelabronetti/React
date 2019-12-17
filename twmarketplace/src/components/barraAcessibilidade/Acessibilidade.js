import React from 'react';
import '../../assets/components/barraAcessibilidade.css';

function Acessibilidade () {
    return (
        <div>
            <header>

                <div className="menu">

                    <section id="acessibilidade">
                        {/* <!--Barra de acessibilidade--> */}
                        <ul className="barra">
                            <li><a href=" ">Acessibilidade</a></li>
                            <li><a href=" ">A-</a></li>
                            <li><a href=" ">A+</a></li>
                            <li><a href=" ">Modo Noturno</a></li>
                        </ul>
                    </section>

                </div>

            </header>
        </div>
            // {/* <!--Fim barra de acessibilidade--> */}
    );
}

export default Acessibilidade;