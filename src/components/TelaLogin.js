import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../assets/reset.css';

export default function TelaLogin(){
    return(
        <Conteiner>
            <input type='text' placeholder='email'/><br/>
            <input type='password' placeholder='senha'/><br/>
            <button>Entrar</button>
            <Link to='/cadastro'>
            <Cadastro>Não tem uma conta? Cadastre-se!</Cadastro>
            </Link>
        </Conteiner>
    );
}

const Conteiner = styled.div`
    background: #FFFFFF;

        input{
            margin: 6px 36px 6px 36px;
        }
        button{
            margin: o 36px 25px 36px;
        }
    
`
const Cadastro = styled.div``