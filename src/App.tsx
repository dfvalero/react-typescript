import * as React from 'react';
import Title from './components/Title/Title';
import actions from './actions';

const App = () => {
    return (
        <>
            <Title>React + Typescript!</Title>
            {actions.map(action => (<div key={action}>{action}</div>))}
        </>
    );
};

export default App;