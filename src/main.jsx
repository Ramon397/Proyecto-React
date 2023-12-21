import React from 'react';
import ReactDOM from 'react-dom/client';
//import {App,HelloWorldApp} from './HelloWordApp'
//import { FirstName } from './FisrtApp';
import {FirstName2} from './FisrtAppCopy';
import './styles.css';
//import { CounterApp } from './counterApp';
//import { Counter2App } from './Counter2App';
//funcion con retorno
//function App(){
//    return <h1>Hola Mundo!!!</h1>;
//}
//renderizar
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/*<App/>*/}
        {/*<HelloWorldApp/>*/}
        {/*<FirstName  />*/}
        < FirstName2 title='Hola, Soy Vegeta'/>
     {/*  <CounterApp value={10}/>*/}
     {/*  <Counter2App value2={"hola soy counter2"}/>*/}
    </React.StrictMode>
);
