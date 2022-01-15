import logo from './logo.svg';
import './App.css'
import { Button } from 'antd';
import Admin from './pages/Home';
import Login from './pages/Login';
import { Switch, Route, NavLink } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Button type="primary">Primary Button</Button>
      <Switch>
        <Route path='/login' component={Login}></Route>
        <Route path='/admin' component={Admin}></Route>
      </Switch>
    </div>
  );
}

export default App;
