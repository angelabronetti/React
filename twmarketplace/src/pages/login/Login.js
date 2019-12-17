import React, {Component} from 'react';
import '../../assets/style/Login.css';
import Acessibilidade from '../../components/barraAcessibilidade/Acessibilidade.js';

class Login extends Component {

    constructor () {
        super ();
        this.state = {
            email:"",
            senha:""
        }
    //     this.loginUsuario = this.loginUsuario.bind(this);
    // }

    // loginUsuario = (event) => {
    //     this.setState({[event.target.name]: event.target.value});
    // }

    // realizarLogin(event){
    //     event.preventDefault();

    //     this.setState({erroMensagem: ''})
    //     this.setState({isLoading: true})

    //     let usuario = {
    //         email: this.state.email,
    //         senha: this.state.senha
    //     }

    //     api
    }
    
                    // {/* ------------------Login--------------- */}
    render() {
        return (
            <div>
                <Acessibilidade/>

                <main className="loginmain">

                    <section id="background">
                    {/* <!-- Parte principal do corpo do site --> */}

                        <div className="sessao">
                            {/* <!-- Sessão definida para dividir o campo de login --> */}

                            <div className="campo">
                            {/* <!-- Div definida para formatar o campo de login --> */}

                                <div className="logo_tw">
                                    <img src={require("../../assets/img/logo.png")}alt=""/>
                                    {  /* <!-- Div para imagem dentro do campo de login --> */}
                                </div>

                                <form className="Formulario">
                                {/* <!-- Tag criada para criar formulário --> */}

                                    <input type="name" name="tNome" id="iNome" placeholder="Email" size="15" maxlength="20"required="required"/> 
                                    {/* <!-- Input criado para usuário inserir o nome para acesso --> */}

                                    <input type="password" name="tSenha" placeholder="Senha" size="15" maxlength="20"required="required"/> 
                                    {/* <!-- Input criado para usuário inserir senha dde acesso --> */}
                                </form>

                                <div className="check">

                                    <input type="checkbox" id="scales" name="scale"/>
                                    <label for="scales">Mantenha-me Conectado</label>
                                    {/* <a href="#">Esqueci a Senha</a> */}
                                </div>

                                <div className="entre">
                                    <a href="../Editado-Tw/index.html">Entrar</a>
                                </div>

                                <div className="cadastro">
                                    <a href="../Editado-Tw/cadastro.html">Cadastre-se Aqui</a>
                                </div>

                                <div className="login_admin">
                                    <a href="../Editado-Tw/Deshboard.html">Login Admin</a>
                                </div>

                            </div>
                        </div>
                    </section>
                </main>
            </div>
        );
    }
}

export default Login;