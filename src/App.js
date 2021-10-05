import { Route, Switch } from 'react-router';
import './App.css';
import LoginPage from './Components/LoginPage';
import AdminPage from './Components/AdminPage';

function App() {
  return (
    <>
      <Switch>
        <Route path="/login" exact component={LoginPage} />
        <Route path="/" exact component={AdminPage} />
      </Switch>
    </>
  );
}

export default App;
