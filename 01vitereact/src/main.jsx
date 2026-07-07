import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// const anotherelement = (
//   <a href="https://google.com" target="_blank">visit google</a>
// )

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'visit google'
)



createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <App />
  // </StrictMode>,
  // anotherelement
  // reactElement

)
