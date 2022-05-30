import styled from 'styled-components';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Logo from '../assets/Group 8.png';

export default function TelaCadastro(){
 
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [picture, setPicture] = useState('');

    function SubmitAccount(){

    const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up';

    const promise = axios.post(URL, {
        email: email,
	    name: name,
	    image: picture,
	    password: password
    });
    promise.then(response => {
        const { data } = response;
        console.log(data);
        navigate('/');
    });
}
    return(
        <Conteiner>
            <img src={Logo}/>
            <input type='text' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type='password' placeholder='senha' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <input type='text' placeholder='nome' value={name} onChange={(e) => setName(e.target.value)}/>
            <input type='text' placeholder='foto' value={picture} onChange={(e) => setPicture(e.target.value)}/>
            <button onClick={SubmitAccount}>Cadastrar</button>
            <Link to='/'>
                <VoltarLogin>Já tem uma conta? Faça login!</VoltarLogin>
            </Link>
        </Conteiner>
    );
}
const Conteiner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    width: 100%;
    box-sizzing: border-box;
    backgroung: #FFFFFF;

    img{
        width:180px;
        height:178.38px;
        padding-top: 68px;
        marging-bottom: 32px;
    }

    input{
        width: 303px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        padding-left: 9px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #DBDBDB;
        margin-bottom: 6px;
    }

    button{
        width: 303px;
        height: 45px;
        left: 36px;
        top: 483px;
        background: #52B6FF;
        border-radius: 4.63636px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20.976px;
        line-height: 26px;
        text-align: center;
        color: #FFFFFF;
        margin-bottom: 25px;
    }
`

const VoltarLogin = styled.div`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52B6FF;
`  