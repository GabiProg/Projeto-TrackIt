import styled from 'styled-components';
import Topo from './Topo';
import Menu from './Menu';
import Habit from './Habit';
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import { AuthContext } from '../contexts/auth';

export default function TelaHabitos(){

    const [habits, setHabits] = useState([]);

    const { token } = useContext (AuthContext);

    useEffect(() => {

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits';
        const promise = axios.get(URL, config);
        promise.then(response => {
            const { data } = response;
            console.log(data);
            setHabits(data);
        });
    }, []);

    function displayHabits(){
        if(habits.length > 0){
            return habits.map(item => {
                const { id, name, days } = item;
                return (
                    <Habit id={id} title={name} day={days}/>
                );
            });
        }
        return <Text>Você não tem nenhum hábito
             cadastrado ainda. Adicione um hábito
              para começar a trackear!</Text>
    }

    const displayhabits = displayHabits();

    return(
        <>
        <Gallery>
            <Topo img/>
            <Container>
                <h2>Meus hábitos</h2>
                <div onClick={displayHabits}><ion-icon name="add"></ion-icon></div>
            </Container>
            {displayhabits}
            <Menu/>
        </Gallery>
        </>
    );
}

const Gallery =styled.div`
    vw: 100%;
    vh: 100%;
    background: #F2F2F2;
`

const Container = styled.div`
    box-sizing: border-box;
    margin-top: 70px;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;

        h2{
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 22.976px;
            line-height: 29px;
            color: #126BA5;
            padding-left: 30px;
            padding-top: 28px;
        }

        div{
            width: 40px;
            height: 35px;
            background: #52B6FF;
            border-radius: 4.63636px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 22px;
            margin-right: 30px;
        }

        ion-icon{
            font-size: 26.976px;
            color: #FFFFFF;
        }
`
const Text = styled.div`
    width: 338px;
    height: 74px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
    padding: 28px 20px 0 17px;
    background: #F2F2F2;
`