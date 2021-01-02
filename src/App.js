import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.scss';

import Home from './pages/home/home.component';
import Play from './pages/play/play.component';

class App extends React.Component {
  // Using componentDidMount() lifecycle method, we will do our API call here.

  render() {
    return (
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/play' component={Play} />
        </Switch>
      </div>
    );
  }
}

export default App;
