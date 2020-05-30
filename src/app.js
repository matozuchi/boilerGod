import React from 'react';
import ReactDOM from 'react-dom';

import { Canvas, three } from './components/Three';

const App = (props) => {
    return (
        <div>
            <Canvas />
        </div>
    );
};

setTimeout(() => {
    three('canvas');
}, 0);

ReactDOM.render(React.createElement(App), document.getElementById('app'));

