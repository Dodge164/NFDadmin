import { Route, Switch } from 'react-router';
import { useDispatch } from 'react-redux';

import './App.css';
import LoginPage from './Components/LoginPage';
import AdminPage from './Components/AdminPage/AdminPage';
import { useTypedSelector } from './hooks/useTypedSelector';
import Alert from './Components/Alert/alert';
import { closeAlert } from './redux/actions/alertAction';

function App() {
  const dispatch = useDispatch();
  const { isShow, message, type } = useTypedSelector(
    (state) => state.alertReducer,
  );

  const handleCloseAlert = () => {
    dispatch(closeAlert());
    console.log('нажали');
  };
  return (
    <>
      {isShow && (
        <Alert onClose={handleCloseAlert} type={type}>
          {message}
        </Alert>
      )}
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/admin" exact component={AdminPage} />
      </Switch>
    </>
  );
}

export default App;
