import './App.css';
import React from 'react'
import { Route, Switch} from 'react-router';
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
      <Switch>
        {
          routes.map(route => <Route exact path={route.path} component={route.component}/>)
        }
      </Switch>
    </div>
  );
}

export default App;