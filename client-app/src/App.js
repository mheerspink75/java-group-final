import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Login from './screens/Login';
import UserHomePage from './screens/User/HomePage';
import { UserTeams } from './screens/User/MyTeam';

import AdminHomePage from './screens/Admin/AdminHomePage';
import AdminAddMembers from './screens/Admin/AdminAddMember';
import AdminProjectView from './screens/Admin/AdminProjectView';
import AdminTeams from './screens/Admin/AdminTeams';
import { AdminRegister } from './screens/Admin/AdminRegister';
import AdminUsers from './screens/Admin/AdminUsers';
import AuthProvider from './auth/AuthProvider';
import RequireUser from './auth/RequireUser';
import RequireAdmin from './auth/RequireAdmin';
import NoMatch from './auth/NoMatch';
import Logout from './auth/Logout';


const App = () => (
  <AuthProvider>
    <Router>
      <Routes>
        <Route path="user" element={<RequireUser />}>
          <Route index element={<UserHomePage />} />
          <Route index path="home" element={<UserHomePage/>} />
          <Route path="teams" element={<UserTeams />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="logout" element={<Logout />} />
        <Route path="admin" element={<RequireAdmin />}>
          <Route index element={<AdminHomePage/>} />
          <Route index path="home" element={<AdminHomePage/>} />
          <Route path="register-user" element={<AdminRegister />} />
          <Route path="add-member" element={<AdminAddMembers />} />
          <Route path="project-view" element={<AdminProjectView />} />
          <Route path="users" element={<AdminUsers/>}/> 
          <Route path="teams" element={<AdminTeams />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  </AuthProvider>
);

export default App;
