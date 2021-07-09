import React, { Component } from 'react';

import  RegForm from './components/form/forms.components.jsx';

import './App.css';

class formApp extends Component {
  render()  {
    return  (
      <div className="App">
        <RegForm/>
      </div>
    );
  }
}

export default formApp;