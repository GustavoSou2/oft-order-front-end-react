import React, { useEffect, useState } from 'react';
import './login.style.css';
import UserService from '../../api/user-service';
import axios from '../../config/axios/axios';

type IUser = {
    mail: string;
    pass: string | number;
}

class Login extends React.Component<{}, any> {
    readonly base_URL: string = "login";
    constructor(props: any) {
        super(props);
        this.state = { 
            mail: "",
            pass: "",
            mailValid: false,
            passValid: false
         };
    }
    
    handleMailChange = (event: any) => {
        this.setState({ mail: event.target.value })
        this.setState({ mailValid: event ? true : false })
    }

    handlePassChange = (event: any) => {
        this.setState({ pass: event.target.value })
        this.setState({ passValid: event ? true : false })
    }

    handleSubmit = (event: any) => {
        axios.post<any>(this.base_URL, { mail: this.state.mail, pass: this.state.pass })
            .then(response => {
                let dataUser = response.data.data[0];
                localStorage.setItem('token', dataUser.token)
                localStorage.setItem('id_user', dataUser.id)
                localStorage.setItem('username', dataUser.name)

                if (localStorage.getItem('token')) window.location.href = '/dashboard'
            })
            .catch(console.log)  
        event.preventDefault()
    }

    render() {
        return (
            <section className="login-component d-flex align-items-center justify-content-center">
                <div className="login-image"></div>
                <form className="login" onSubmit={this.handleSubmit}>
                    <div className="column">
                        <label htmlFor="user_mail">Email</label>
                        <input type="email" onChange={this.handleMailChange} id="user_mail" value={ this.state.mail } />
                    </div>
                    <div className="column">
                        <label htmlFor="user_name">Senha</label>
                        <input type="password" onChange={this.handlePassChange} id="user_pass" value={ this.state.pass } />
                    </div>
                    <span>Ainda não possui uma conta? <a href="/create_account">Criar uma conta</a></span>
                    <hr />
                    <div className="d-flex justify-content-end">
                        <button type="button" className="btn btn-light">Cancelar</button>
                        <input type="submit" className="btn btn-primary ml-2" value="Entrar" />
                    </div>
                </form>        
            </section>
        );
    }
}

export default Login;