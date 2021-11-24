import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import UserNavbar from '../../components/UserNavbar'
import { getCompany } from '../../services/AdminService';
export const description = `
Generic description text for all the users at FedEx. I will now begin my lorem ipsum. Lorem ipsum dolor sit amet, consectetur adipsicing elit. Sed sapien nulla, venenatis vestibulum bibendum nec, ornare et magna. Generic description text for all the users at FedEx. I will now begin my lorem ipsum. Lorem ipsum dolor sit amet, consectetur adipsicing elit. Sed sapien nulla, venenatis vestibulum bibendum nec, ornare et magna. Generic description text for all the users at FedEx. I will now begin my lorem ipsum. Lorem ipsum dolor sit amet, consectetur adipsicing elit. Sed sapien nulla, venenatis vestibulum
`;

export const DescriptionStyles = {
    width: '80%',
		height: '500px',
		margin: 'auto',
		borderRadius: '20px',
		padding: '20px',
		resize: 'none',
		border: '1px solid black'
};

// TODO: make Logo

const Badge = () => (
  <div style={{display: 'flex', alignItems: 'center'}}>
    <div style={{borderRadius: '50%', backgroundColor: '#C4C4C4', width: '159px', height: '159px'}} />
    <div style={{padding: '10px'}}>
      <p><b>Cook</b></p>
      <p>Systems</p>
    </div>
  </div>
);

const NavbarLinks = () => (
  <ul style={{display: 'flex', listStyleType: 'none', gap: '5px'}}>
    <li><Link to="/user">Home</Link></li>
    <li><Link to="/user/teams">My Team</Link></li>
  </ul>
);

// TODO: Update to Navbar shared component
export const Navbar = () => (
  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
    <Badge />
    <NavbarLinks />
  </div>
);

// TODO: use a site-wide container
// TODO: pull description from site
const UserHomePage = () => {
  const [company, setCompany] = useState({})

  useEffect(() => {
    getCompany("1").then(companyData => {
      setCompany(companyData)
    })
  }, [])
 
 return (<>
    <UserNavbar />
  <div style={{display: 'flex', width: '1000px', flexDirection: 'column', textAlign: 'center', justifyContent: 'center', marginTop: '3em', marginRight: 'auto', marginLeft: 'auto'}}>
  <h3>Welcome to the {company.name} Wiki!</h3>
    <p style={DescriptionStyles}>{company.description}</p>
  </div>
</>);
}

export default UserHomePage;
