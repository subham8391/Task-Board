import React from 'react'
import Header from './Components/Header';
import Body from './Components/Body';
import './App.css';
function App() {
  return (
    <>
      <div className="container">
        <div className="body-section">
          <Header />
          <Body />
         
        </div>
      </div>
    </>
  )
}

export default App