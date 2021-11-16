import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './screens/Login';
import UserHomePage from './screens/User/HomePage';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminAddMembers from './screens/Admin/AdminAddMember';
import VerticalSidebar from './components/VerticalSidebar';


const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<UserHomePage />} />
      <Route path="user">
        <Route path="." element={<UserHomePage />} />
       
      </Route>
      <Route path="login" element={<Login />} />

	  <Route path="/admin-add-member" element={<AdminAddMembers/>} />

    </Routes>
  </Router>
);

export default App;
