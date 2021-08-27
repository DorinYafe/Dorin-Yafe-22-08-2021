import React from 'react';
import useWeatherApi from './hooks/useWeatherApi';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Navigation from './components/Navigation/Navigation';
import routeMapping from './config/routingConstants';


function App() {

  const history = createBrowserHistory();

  // useWeatherApi();

  return (
    <BrowserRouter history={history}>
      <Navigation history={history} />
      <Switch>
        {
          Object.entries(routeMapping)
            .map(([key, props]) => <Route key={key} {...props} />)
        }
      </Switch>
    </BrowserRouter>
  );
}

export default App;

