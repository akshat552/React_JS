import React from 'react'
import ReactDOM from 'react-dom/client'

const heading = React.createElement('h1',{id:'heading'},"Hello World from Akshat Singh");

const jsxHeading = <a href={'https://github.com/'}>github</a>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(jsxHeading);




