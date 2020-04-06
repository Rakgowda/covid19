import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route,Link,NavLink,BrowserRouter as Router} from 'react-router-dom'
import { Provider } from 'react-redux'
import Header from './component/Header'
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
    <Router>
  
   
  
    <Switch>
   <Route exact path="/" component={Header}>
  
   </Route>
   
   </Switch>
    </Router>
  
     </Provider>
  );
}

export default App;
