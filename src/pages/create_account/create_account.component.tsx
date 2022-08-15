import React, { useEffect, useState } from 'react';
import './create_account.style.css';
import axios from '../../config/axios/axios';
import { createAccount } from '../../api/user-service';

type IUser = {
    mail: string;
    pass: string | number;
}

export function CreateAccountComponent() {
    let base_URL = "login";
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [password, setPassword] = useState('');
    const [descriptionWork, setDescriptionWork] = useState('');


    function handleSubmit(event: any) {
        event.preventDefault()
        createAccount(
            {
                name: username,
                mail: email,
                cnpj: cnpj,
                company_name: companyName,
                description_work: descriptionWork,
                password: password,
            }
        ).then(console.log)
    }
     
    const handlersUserName = (event: any) =>  setUsername(event.target.value) 
    const handlersEmail = (event: any) =>  setEmail(event.target.value) 
    const handlersCompanyName = (event: any) =>  setCompanyName(event.target.value) 
    const handlersCnpj = (event: any) =>  setCnpj(event.target.value) 
    const handlersPassword = (event: any) =>  setPassword(event.target.value) 
    const handlersDescriptionWork = (event: any) =>  setDescriptionWork(event.target.value) 

    return (
        <section className="login-component d-flex align-items-center justify-content-center">
            <div className="login-image"></div>
            <form className="login" onSubmit={handleSubmit}>
            <div className="column">
                    <label htmlFor="user_name">Nome *</label>
                    <input type="text" onChange={handlersUserName}  id="user_name" value={username} className="field-form" />
                </div>
                <div className="column">
                    <label htmlFor="user_mail">Email *</label>
                    <input type="email" onChange={handlersEmail} id="user_mail" value={email} className="field-form" />
                </div>
                <div className="column">
                    <label htmlFor="user_company">Nome da Empresa </label>
                    <input type="text" onChange={handlersCompanyName} id="user_company" value={companyName} className="field-form" />
                </div>
                <div className="column">
                    <label htmlFor="user_cnpj">CNPJ </label>
                    <input type="text" onChange={handlersCnpj} value={cnpj} pattern="/(^\d{3}\.\d{3}\.\d{3}\-\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$)/" id="user_cnpj" className="field-form" />
                </div>
                <div className="column">
                    <label htmlFor="user_name">Senha *</label>
                    <input type="password" onChange={handlersPassword} value={password} id="user_pass" className="field-form" />
                </div>
                <div className="column">
                    <label htmlFor="user_cnpj">Descrição do Trabalho</label>
                    <input type="text" onChange={handlersDescriptionWork} value={descriptionWork} id="user_cnpj" className="field-form" />
                </div>
                <span>Já possui uma conta? <a href="/login">Entrar</a></span>
                <hr />
                <div className="d-flex justify-content-end">
                    <button type="button" className="btn btn-light">Cancelar</button>
                    <input type="submit" className="btn btn-primary ml-2" value="Criar" />
                </div>
            </form>        
        </section>
    );
}
