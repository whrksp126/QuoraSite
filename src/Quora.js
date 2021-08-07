import React from 'react';
import './Quora.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widget from './Widget';

function Quora() {
  return (
    <div className="quroa">
      <Navbar />
      <div className="quora_content">
        <Sidebar />
        <Feed />
        <Widget />
      </div>
    </div>
  );
}

export default Quora;
