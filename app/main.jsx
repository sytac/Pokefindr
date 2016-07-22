import './stylesheets/main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import lload from 'little-loader';
import App from './src/components/App';

// init shell
renderShell();
function renderShell() {
    let shell = document.createElement('div');
    shell.className = 'app-shell';
    document.body.appendChild(shell);
    lload('https://maps.googleapis.com/maps/api/js?key=AIzaSyBaXS1UejvaJU1FxHd0lGZeTcWM9Bxdas4', () => {
      ReactDOM.render(<App />, shell);
    });
}
