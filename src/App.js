import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Error from './pages/Error';

import './App.css';

import NavOne from './component/navbar/NavOne';
import { ConText } from './component/context/DataContext';


const App = () => {
  return (
    <>
    <ConText>
    <NavOne />
      <Switch>
        <Route exact path="/" component={Home} />

       


        <Route component={Error} />
      </Switch>
    </ConText>
     
    </>
  );
};

export default App;
