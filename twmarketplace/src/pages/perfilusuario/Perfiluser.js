import React, { Component } from 'react';
import '../../assets/style/user.css';

import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBInput } from 'mdbreact';
// import Acessibilidade from '../../components/barraAcessibilidade/Acessibilidade.js';
// import Rodape from '../../components/footer/Rodape'

class Perfiluser extends Component {

    constructor() {
        super();
        this.state = {
            idUsuario: "",
            nome: "",
            email: "",
            senha: "",
            cEmail: "",
            cSenha: "",
            listaUsuario: [], // lista com array para buscar todos os usuários e salvar aqui 
            atualizarUsuario: [], // atualiza todos os usuários no modal
            loading: false,
            modal: false,
            editarModal: {
                idUsuario: "",
                nome: "",
                email: "",
                senha: "",
                cEmail: "",
                cSenha: ""
            }

        }

        this.perfilUsuario = this.perfilUsuario.bind(this);
        this.buscarUsuario = this.buscarUsuario.bind(this);
        this.atualizarUsuario = this.atualizarUsuario.bind(this);
        this.alterarUsuario = this.alterarUsuario.bind(this);
        this.atualizarModalUsuario = this.atualizarModalUsuario.bind(this);
    }

    // Função de Alterar - PUT

    //  O método Toggle
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    // listaAtualizada = () => { // caminho para o modal encontrar a api

    //     this.setState({ loading: true });

    //     fetch("https://localhost:5001/api/usuario")
    //         .then(response => response.json())
    //         .then(data => {
    //             this.setState({ lista: data })
    //             this.setState({ loading: false });
    //         })
    //         .catch(error => {
    //             this.setState({ loading: false });
    //             console.log(error);
    //         })
    // }

    alterarUsuario = (usuario) => { // campos para edição do modal
        console.log(usuario);

        this.setState({
            editarModal: {
                idUsuario: this.idUsuario,
                nome: this.nome,
                email: this.email,
                senha: this.senha
            }
        })
        //Abrir Modal
        this.toggle();
    }


    atualizarModalUsuario(event) { // Botão de atualizar para abrir o modal
        this.setState({
            editarModal: {
                idUsuario: this.editarModal.idUsuario,
                nome: event.target.value,
                email: event.target.value,
                cEmail: event.target.value,
                senha: event.target.value,
                cSenha: event.target.value
            }

        })
    }


    // Abrir Modal

    atualizarUsuario = (event) => { // Botão de Salvar do Modal

        event.preventDefault();
        console.log("EDITAR MODAL " + this.state.editarModal);

        fetch("http://localhost:5001/api/usuario/id/" + this.state.editarModal.idUsuario, {
            method: "PUT",
            body: JSON.stringify(this.state.editarModal),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(
                setTimeout(() => {
                    this.buscarUsuario()
                }, 1000)
            )
            .catch(error => console.log(error))

        // FecharModal
        this.toggle();
    }

    // ----------------------------------------------------------

    // Listar eventos da api -  GET
    buscarUsuario() {
        let id = 1;
        fetch('http://localhost:5000/api/usuario/id/' + id)
            .then(response => response.json())
            .then(response => {
                this.setState({ listaUsuario: response })
                console.log("DATA " + response);
            })
            .catch((erro) => console.log(erro));

        console.log("LISTA USUARIO " + this.state.listaUsuario)
        // this.setState({ nome: this.state.listaUsuario.nome })
        // this.setState({ email: this.state.listaUsuario.email })
        // this.setState({ cEmail: this.state.listaUsuario.cemail })
        // this.setState({ senha: this.state.listaUsuario.senha })
        // this.setState({ cSenha: this.state.listaUsuario.csenha })

        // console.log("NOME "+this.state.nome);


    }

    // ----------------------------------------------------------

    // Listar eventos da api -  POST
    perfilUsuario(event) {//Event faz funcionar a função.

        event.preventDefault(); //Usado para previnir a página
        console.log("Acesso ao Perfil");//Mostrar o que está acontecendo

        let dados = this.state.listaUsuario;

        //Caminho de pega as informações da API
        fetch('http://localhost:5000/api/Usuario', {

            // //Estrutura do código, sempre tem que ter
            method: "PUT", //Qual metedo vai usar

            //O tipo, Tipo JSON e dentro da os nomes das variaveis
            //HEADERS, Refoço que é do tipo JSON
            body: JSON.stringify({ dados }),
            headers: {
                "Content-Type": "application/json",
                "Authentication": "Bearer " + localStorage.getItem('usuario-Tw')
            }
        })
            .then(Response => Response.json()) //Then - Então, diz que vai retornar tudo que tem dentro do meu fetch
            .catch(error => console.error(error)); // Qualquer erro que tiver vai mostrar console
    }

    atualizaEstado = (event) => {
        this.setState({ [event.target.name]: event.target.value }); // Função que pega do HTML
    }

    // -----------------------------------------------------------

    //Começo do ciclo de vida da funcao buscarEventos
    componentDidMount() {
        this.buscarUsuario();
    }

    // INICIO DO HTML
    render() {

        // let {loading} = this.state;

        return (

            <div>
                <main id="perfilmain">
                    <section id="menu_lateral_esquerdo">
                        <div id="edicao_ul">
                        <ul>
                            <li>
                                <a href="#">Perfil</a>
                            </li>

                            <li>
                                <a href="#">Interesses</a>
                            </li>

                            <li>
                                <a href="#">Notificações</a>
                            </li>

                            <li>
                                <a href="#">Produtos</a>
                            </li>

                        </ul>
                        </div>
                    </section>

                    <section id="lateral_direita">
                        <div class="topo_direito">
                            <h1>Perfil do Usuário</h1>
                        </div>
                    </section>
                </main>

                <div className="infoUser">
                    <div id="info">
                        <form id="box-form">
                            <div id="form1">
                                <label>Nome:</label>
                                <input type="text" name="nomeCompleto" className="nomeUser" placeholder=" Nome Completo" />

                                <label>Alterar E-mail:</label>
                                <input type="text" name="alterEmail" className="emailUser" placeholder=" Insira uma nova senha" />

                                <label>Confirme seu E-mail:</label>
                                <input type="text" name="alterConfEmail" className="cEmailUser" placeholder=" Confirme  sua senha" />
                            </div>

                            <div id="form2">

                                <label id="idEmail">Alterar Senha:</label>
                                <input type="text" name="senhaUser" className="alterarSenha" placeholder=" Insira um novo e-mail" />

                                <label id="idConfEmail">Confirme sua Senha:</label>
                                <input type="text" name="confirsenha" className="confSenha" placeholder=" Confirme seu e-mail" />

                                <div className="botaofinal">
                                    <button className="btnFinal"><p>Atualizar</p></button>
                                </div>
                            </div>
                        </form>
                    </div>
                    
                </div>   
        </div>  
    );
    }
}

export default Perfiluser;