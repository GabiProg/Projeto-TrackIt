import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TelaLogin from './TelaLogin';
import TelaCadastro from './TelaCadastro';
import TelaHabitos from './TelaHabitos';
import TelaHoje from './TelaHoje';
import TelaHistorico from './TelaHistorico';
import AuthProvider from '../contexts/auth';

export default function App(){

    

    return(
        <div>
            <BrowserRouter>
                <AuthProvider>
                    <Routes>
                        <Route path='/' element={<TelaLogin />}/>
                        <Route path='/cadastro' element={<TelaCadastro/>}/>
                        <Route path='/habitos' element={<TelaHabitos />}/>
                        <Route path='/hoje' element={<TelaHoje/>}/>
                        <Route path='/historico' element={<TelaHistorico/>}/>
                    </Routes>
                </AuthProvider>
            </BrowserRouter>
        </div>
    );
}