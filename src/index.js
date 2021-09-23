import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import './styles/global.css'

const rootComponent = <StrictMode><App /></StrictMode>; 

ReactDOM.render(rootComponent, document.getElementById('root'));