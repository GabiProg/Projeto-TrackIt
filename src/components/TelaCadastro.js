import styled from 'styled-components';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function TelaCadastro(){
 
    const navigate = useNavigate();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [name, setName] = useState();
    const [picture, setPicture] = useState();

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
        navigate('/');
    });
}
    return(
        <Conteiner>
            <input type='text' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}/><br/>
            <input type='password' placeholder='senha' value={password} onChange={(e) => setPassword(e.target.value)}/><br/>
            <input type='text' placeholder='nome' value={name} onChange={(e) => setName(e.target.value)}/><br/>
            <input type='text' placeholder='foto' value={picture} onChange={(e) => setPicture(e.target.value)}/><br/>
            <button onClick={SubmitAccount}>Cadastrar</button>
            <Link to='/'>
                <VoltarLogin>Já tem uma conta? Faça login!</VoltarLogin>
            </Link>
        </Conteiner>
    );
}
const Conteiner = styled.div``

const VoltarLogin = styled.div``  