import styled from 'styled-components';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from 'react-router-dom';

export default function Menu(){

    const percentage = 0;
    const text = 'Hoje';

    return(
        <Conteiner>
            <Link to='/habitos'>
            <div>Hábitos</div>
            </Link>
            <Link to='/hoje'>
            <div className='barra' style={buildStyles({ 
                width: 91, 
                height: 91, 
                })}>
                <CircularProgressbar value={percentage} text={`${text}`}/>
            </div>
            </Link>
            <Link to='/historico'>
            <p>Histórico</p>
            </Link>
        </Conteiner>
    );
}

const Conteiner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;

        div{
            padding-left: 31px;
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 17.976px;
            line-height: 22px;
            text-align: center;
            color: #52B6FF;
        }

        p{
            padding-right: 34px;
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 17.976px;
            line-height: 22px;
            text-align: center;
            color: #52B6FF;
        }
        
        .barra{
            display: flex;
            aling-items: center;
            justify-content: center;
            margin-bottom: 40px;
            width: 91px;
            height: 91px;
            border-radius: 80px;
            margin-right: 30px;
            trailColor: transparent;
        }
`