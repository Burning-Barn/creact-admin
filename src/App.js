import logo from './logo.svg';
import './App.less'
import Admin from './pages/Admin/admin';
import Login from './pages/Login/login';
import { Switch, Route, NavLink } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/login' component={Login}></Route>
        <Route path='/' component={Admin}></Route>
      </Switch>
    </div>
  );
}

export default App;
