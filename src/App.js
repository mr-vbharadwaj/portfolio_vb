import React, { useState } from 'react';
import './App.css';
import { b_cloud01,
  b_cloud02,
  cloud1,
  cloud2,
  cloud3,
  moon,
  moonlight,
  star } from './img/imports';

function App() {

  function myFunction(event) {
    const x = event.target; 
    x.classList.toggle("change");
  }

  return (
    <div className="App">
      <header className="App-header">
        <a href='./'>Mr.VB</a>
        <div className="menuIcon" onClick={myFunction}>
          <div className='bar1'></div>
          <div className='bar2'></div>
          <div className='bar3'></div>
        </div>
      </header>
      <div className='background'>
        <img className='stars' src={star}></img>
        <img className='light' src={moonlight} alt='MoonLight'></img>
      </div>
      <div className='clouds'>
        <div className='cloud1'>
          <img src={cloud1}></img>
        </div>
        <div className='cloud2'>
          <img src={cloud2}></img>
        </div>
        <div className='cloud3'>
          <img src={cloud3}></img>
        </div>
      </div>
      <div className='banner'>
        <h1>VARUN <br></br> BHARADWAJ</h1>
      </div>
      <div className='moon'>
        <img src={moon}></img>
      </div>
    </div>
  );
}

export default App;
