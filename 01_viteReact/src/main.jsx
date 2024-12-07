import { createRoot } from 'react-dom/client'
import App from './App'
import React from 'react';


function MyApp(){
    return(
        <div>
            <h1>Custom App</h1>
        </div>
    );
}

const anyElement = (
    <a href='https://google.com' target='_blank'>Click me</a>
)

//checking
const anotherUser = "===sss"

//repeating custom reat element but in - REACT style
const reactElement = React.createElement(
    'a',
    {href:"https://google.com",target:'_blank'},
    'Click me to visit google.com',
    anotherUser
);


createRoot(document.getElementById('root')).render(
    // MyApp() -- will work witout <div>
    // 'anyElement' & 'reactElement' work w/o div
   
   <>
    <App />
    {/* <MyApp /> */}
    </>
    
  
)
