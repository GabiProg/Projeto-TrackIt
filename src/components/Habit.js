import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { AuthContext } from '../contexts/auth';


export default function Habit(){

   /* const [color, setColor] = useState('#FFFFFF');

    function dom(click){
        if(click === '1'){
            setColor('#CFCFCF');
          }
    }*/

    const [name, setName] = useState('');

    /*const { token } = useContext (AuthContext);

    function createHabit(){

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits';

        const promise = axios.post(URL, {
            name: name,
	        days: []
        }, config);

    }*/

    return (
       <Container>
            <input type='text' placeholder='nome do hábito' value={name} onChange={(e) => setName(e.target.value)}/>
            <div className='dias'>
                <div /*onClick={() => dom('1')} style={{background:`${color}`}}*/>D</div>
                <div>S</div>
                <div>T</div>
                <div>Q</div>
                <div>Q</div>
                <div>S</div>
                <div>S</div>
            </div>
            <div className='botao'>
                <div className='cancelar'>Cancelar</div>
                <button>Salvar</button>
            </div>
       </Container>
    );
}

const Container = styled.div`
    margin-top: 70px;
    height: 180px;
    width: 340px;
    padding: 20px 17px 29px 17px;
    box-sizing: border-box;
    background: #FFFFFF;
    border-radius: 5px;
    
        input{
            width: 303px;
            height: 45px;
            background: #FFFFFF;
            border: 1px solid #D5D5D5;
            border-radius: 5px;
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 19.976px;
            line-height: 25px;
            color: #DBDBDB;
            padding-left: 11px;
            margin: 18px 13px 8px 5px;
            box-sizing: border-box;
        }

        .dias{
            display: flex;
            margin-left: 19px;
            gap: 4px;
            box-sizing: border-box;
        }

        .dias div{
            display: flex;
            aling-items: center;
            justify-content: center;
            width: 30px;
            height: 30px;
            background: #FFFFFF;
            border: 1px solid #D5D5D5;
            border-radius: 5px;
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 19.976px;
            line-height: 25px;
            color: #DBDBDB;
            box-sizing: border-box;
        }

        .botao{
            display: flex;
            aling-items: center;
            justify-content: flex-end;
            margin-top: 15px;
            gap: 23px;
        }
        .botao button{
            width: 84px;
            height: 35px;
            background: #52B6FF;
            border-radius: 4.63636px;
        }

        .botao div{
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 15.976px;
            line-height: 20px;
            text-align: center;
            color: #52B6FF;
        }
`  