import Menu from "./Menu";
import Topo from "./Topo";
import styled from 'styled-components';

export default function TelaHoje(){
    return(
        <Page>
        <Topo/>
        <div>Tela Hoje</div>
        <Menu/>
        </Page>
    );
}

const Page = styled.div`
    background: #F2F2F2;
    width: 100%;
    height: 572px;
`