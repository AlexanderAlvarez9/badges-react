import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'

import './Global.css'
import BadgeNew from './pages/BadgeNew'
import Badges from './pages/Badges'

// const jsx = <h1>Hola proyecto de Platzi Medallas, desde React</h1>
// const element = React.createElement('a', { href: 'https://www.google.com' }, 'ir a Google')
// const element = React.createElement('h1', {}, `Hola Soy ${name}`)

// const jsx = (
//     <div>
//         <h1>Hola Soy {name}</h1>
//         <p>Sere un futuro frontend developer</p>
//     </div>
// )


const container = document.getElementById('app');

// ReactDOM.render(__que__, ___donde___);
ReactDOM.render(<Badges />, container);

// ReactDOM.render(<Badge
//     avatarUrl="https://s.gravatar.com/avatar/73e82d5839f558f49b9b9e50ca827b2b?s=80"
//     fristName="Sofia"
//     lastName="Alvarez"
//     jobTitle="Muñeca"
//     twitter="No tiene"
// />, container);