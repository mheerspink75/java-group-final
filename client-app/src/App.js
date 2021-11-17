import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './screens/Login';
import UserHomePage from './screens/User/HomePage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminHomePage from './screens/Admin/AdminHomePage';
import AdminAddMembers from './screens/Admin/AdminAddMember';
import { AdminRegister } from './screens/Admin/AdminRegister';
import AdminProjectView from './screens/Admin/AdminProjectView';
import AdminTeams from './screens/Admin/AdminTeams';
import AuthProvider from './auth/AuthProvider';
import RequireUser from './auth/RequireUser';
import RequireAdmin from './auth/RequireAdmin';
import NoMatch from './auth/NoMatch';

const App = () => (
  <AuthProvider>
    <Router>
      <Routes>
        <Route path="user" element={<RequireUser />}>
          <Route index element={<UserHomePage />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="admin" element={<RequireAdmin />}>
          <Route index element={<AdminHomePage/>} />
          <Route path="register-user" element={<AdminRegister />} />
          <Route path="add-member" element={<AdminAddMembers />} />
          <Route path="project-view" element={<AdminProjectView />} />
          <Route path="teams" element={<AdminTeams />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  </AuthProvider>
);

export default App;
