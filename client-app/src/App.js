import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './screens/Login';
import UserHomePage from './screens/User/HomePage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminAddMembers from './screens/Admin/AdminAddMember';
import AdminProjectView from './screens/Admin/AdminProjectView';
import AdminTeams from './screens/Admin/AdminTeams';
import { AdminRegister } from './screens/Admin/AdminRegister';

const App = () => (
	<Router>

		<Routes>
			<Route path="/" element={<UserHomePage />} />
			<Route path="user">

				<Route path="." element={<UserHomePage />} />

			</Route>
			<Route path="login" element={<Login />} />

			<Route path="/admin-add-member" element={<AdminAddMembers />} />
			<Route path="/admin-project-view" element={<AdminProjectView />} />
			<Route path="/register-user" element={<AdminRegister />} />
			<Route path="/admin-teams" element={<AdminTeams/>}/>
		</Routes>
	</Router>
);

export default App;
