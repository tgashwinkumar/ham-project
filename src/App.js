import './App.css';
import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router';
import Home from './pages/Home'
import Documents from './pages/Documents'
import Statistics from './pages/Statistics';
import AboutUs from './pages/AboutUs'

function App() {

  const routes = [
    {path:'/', component: Home},
    {path:'/documents', component: Documents},
    {path:'/statistics', component: Statistics},
    {path:'/aboutus', component: AboutUs},
  ]

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {
            routes.map(route => <Route exact path={route.path} component={route.component}/>)
          }
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;