
import './App.css';
import {Route,Routes,Switch} from 'react-router-dom'
import Register from './components/Register.jsx'
import Home from './components/Home.jsx';
import Login from './components/Login';
function App() {
  return (
    <>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route  exact path='/Register' component={Register}/>
      <Route exact path='/Login' component={Login}/>
    </Switch>
    </>
  );
}

export default App;
