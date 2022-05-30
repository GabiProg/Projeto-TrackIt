import styled from 'styled-components';

export default function Topo(){

        

    return(
        <Conteiner>
            <h1>TrackIt</h1>
            <img/>
        </Conteiner>
    );
}

const Conteiner = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    position: fixed;
    box-sizing: border-box;
    margin-bottom: 70px;
    top:0;
    left:0;

        img{
            width: 51px;
            height: 51px;
            padding-right: 18px;
            border-radius: 98.5px;
        }

        h1{
            font-family: 'Playball';
            font-style: normal;
            font-weight: 400;
            font-size: 38.982px;
            line-height: 49px;
            color: #FFFFFF;
            padding-left: 18px;
        }
`