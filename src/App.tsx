import { Route, Switch } from 'react-router';
import './App.css';
import LoginPage from './Components/LoginPage';
import AdminPage from './Components/AdminPage/AdminPage';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={LoginPage} />
      <Route path="/admin" exact component={AdminPage} />
    </Switch>
  );
}

export default App;
