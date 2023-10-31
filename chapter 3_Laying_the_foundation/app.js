import React from 'react';
import ReactDOM from 'react-dom/client';

// React component
const ReactElement = ()=>(
 <h1 className='head'>Akshat singh React</h1>
);
// Component composition
const Head =()=> (
    <div id='container'>
        <ReactElement/>
<h1 className='head'>Akshat is here</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Head/>)

