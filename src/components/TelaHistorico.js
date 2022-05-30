import Topo from './Topo';
import Menu from './Menu';
import styled from 'styled-components';
import Habit from './Habit';

export default function TelaHistorico(){
    return(
        <>
            <Topo/>
            <Container>
                <h3>Histórico</h3>
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </Container>
            <Menu/>
        </>
    );
}

const Container = styled.div`
    background: #F2F2F2;
    
        h3{ 
            padding-left: 17px;
            padding-top: 98px;
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 22.976px;
            line-height: 29px;
            color: #126BA5;
        }

        p{
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 17.976px;
            line-height: 22px;
            color: #666666;
            padding-left: 15px;
            padding-top: 17px;
        }
`