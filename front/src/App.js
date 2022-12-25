import './App.css';
import {Route,Routes,Switch} from 'react-router-dom'
import Register from './components/Register.jsx'
import Home from './components/Home.jsx';
import Login from './components/Login';
import RecipePage from './components/MainTask/RecipePage';
import Ingredients from './components/MainTask/Ingredients';
function App() {
  return (
    <>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route  exact path='/Register' component={Register}/>
      <Route exact path='/Login' component={Login}/>
      <Route exact path="/Recipe" component={RecipePage}/>
      <Route exact path="/*/Ingredients" component={Ingredients}></Route>
    </Switch>
    </>
  );
}

export default App;
