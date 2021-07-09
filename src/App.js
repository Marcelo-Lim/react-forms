import React, { Component}  from 'react';

import  MainForm from './components/main/main-form.component';

import './App.css';

class formApp extends Component {
  render()  {
    return  (
      <div className="App">
        <MainForm/>
      </div>
    );
  }
}

export default formApp;