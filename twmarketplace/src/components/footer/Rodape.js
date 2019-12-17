import React from 'react';
import '../../assets/components/Rodape.css';

function Rodape () {
    return (
        <div>
            <hr className="hrHome" />

            <footer className="footerHome">
                <img className="logo_thw" src="../imagens/rodape.png" alt="Imagem do Logo da ThougthWorks"/>
                <p className="texto_rodape">
                    ThougthWorks MarketPlace © 2019 - Todos os direitos reservados - TWmarketplace.com.br atividades de internet
                    LTDA <br/> CNPJ: 99.999.999/9999-99
                    Rua dos Alfineiros, 4, Surrey, Londres, 99999-999 - (11) 9999-9999
                </p>
            </footer>

        </div>
    );
}

export default Rodape;