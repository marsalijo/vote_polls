import React from 'react';
import { Route } from 'react-router-dom'

//styles
import './App.css';

//components
import Home from './containers/Home';
import QuestionDetail from './containers/QuestionDetail';



function App() {

  return (
    <div className="App">
      <Route path="/" exact component={Home} />
      <Route path="/questions/:id" component={QuestionDetail} />
    </div>
  );
}

export default App;
