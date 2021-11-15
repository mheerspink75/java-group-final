import {BrowserRouter as Router, Routes, Route, Switch} from 'react-router-dom';
import Login from './screens/Login';
import UserHomePage from './screens/User/HomePage';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
    <Switch>
    <Routes>
      <Route path="/" element={<UserHomePage />} />
      <Route path="user">
        <Route path="." element={<UserHomePage />} />
      </Route>
      <Route path="login" element={<Login />} />
    </Routes>
    </Switch>

);

export default App;
