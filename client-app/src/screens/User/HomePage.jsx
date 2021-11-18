import {Link} from 'react-router-dom';

const description = `
Generic description text for all the users at FedEx. I will now begin my lorem ipsum. Lorem ipsum dolor sit amet, consectetur adipsicing elit. Sed sapien nulla, venenatis vestibulum bibendum nec, ornare et magna. Generic description text for all the users at FedEx. I will now begin my lorem ipsum. Lorem ipsum dolor sit amet, consectetur adipsicing elit. Sed sapien nulla, venenatis vestibulum bibendum nec, ornare et magna. Generic description text for all the users at FedEx. I will now begin my lorem ipsum. Lorem ipsum dolor sit amet, consectetur adipsicing elit. Sed sapien nulla, venenatis vestibulum
`;

const DescriptionStyles = {
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: '300',
  fontSize: '30px',
  lineHeight: '35px',

  borderStyle: 'solid',
  borderWidth: '1px',
  borderRadius: '5px', 
  boxShadow: '1px 1px 1px #000', 
  height: '300px', 
  overflowY: 'scroll'
};

// TODO: make Logo
const Logo = () => <h3>Welcome to the Fedex Wiki!</h3>;

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
    <li><Link to="/">Home</Link></li>
    <li><Link to="/teams">My Team</Link></li>
  </ul>
);

// TODO: Update to Navbar shared component
const Navbar = () => (
  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
    <Badge />
    <NavbarLinks />
  </div>
);

// TODO: use a site-wide container
// TODO: pull description from site
const UserHomePage = () => <>
  <div style={{display: 'flex', width: '1000px', flexDirection: 'column', textAlign: 'center', justifyContent: 'center', marginTop: '3em', marginRight: 'auto', marginLeft: 'auto'}}>
    <Navbar />
    <Logo />
    <p style={DescriptionStyles}>{description}</p>
  </div>
</>;

export default UserHomePage;
