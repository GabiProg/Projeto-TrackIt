import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import '../assets/reset.css';
import Logo from '../assets/Group 8.png';
import React, { useState, useContext } from 'react';
import axios from 'axios';

import { AuthContext } from '../contexts/auth';

export default function TelaLogin(){

    const navigate = useNavigate();

    const {getToken} = useContext (AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function Login(){

    const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login';

    const promise = axios.post(URL, {
        email: email,
	    password: password 
    });
    promise.then(response => {
        const { data } = response;
        console.log(data)
        getToken(data.token);
        navigate('/habitos');
    });
}    

    return(
        <Conteiner>
            <img src={Logo}/>
            <input type='text' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type='password' placeholder='senha' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={Login}>Entrar</button>
            <Link to='/cadastro'>
            <Cadastro>Não tem uma conta? Cadastre-se!</Cadastro>
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

const Cadastro = styled.div`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52B6FF;
`

/**email: "mauricinho@com.br"
id: 2995
image: "https://1.bp.blogspot.com/-IfGHfhycWjk/T20Ze2YlYFI/AAAAAAAAB_E/8i8JNDMOU_o/s1600/Mauricinho.JPG"
name: "Mauricinho"
password: "123456"
token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Mjk5NSwiaWF0IjoxNjUzNDk5NTEyfQ.26trLOwKdJZgju1lA6Hqic5nwj52jYLpcOrCgYMXbUI"
[[Prototype]]: Object */