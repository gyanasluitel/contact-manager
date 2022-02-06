// import Container from 'react-bootstrap/esm/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import { LinkContainer } from 'react-router-bootstrap';
import { NavLink } from 'react-router-dom';
import './AppNavbar.css';

function AppNavbar() {
  const authenticated = false;

  // const authLinks = (
  //   <Nav>
  //     <LinkContainer to='/signout'>
  //       <Nav.Link>Sign Out</Nav.Link>
  //     </LinkContainer>
  //   </Nav>
  // );

  // const guestLinks = (
  //   <Nav>
  //     <LinkContainer to='/signin'>
  //       <Nav.Link>Sign In</Nav.Link>
  //     </LinkContainer>
  //     <LinkContainer to='/signup'>
  //       <Nav.Link>Sign Up</Nav.Link>
  //     </LinkContainer>
  //   </Nav>
  // );

  const authLinks = (
    <ul className='nav-details'>
      <li className='nav-item'>
        <NavLink to='/signout'>Sign Out</NavLink>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul className='nav-details'>
      <li className='nav-item'>
        <NavLink to='/signup'>Sign Up</NavLink>
      </li>
      <li className='nav-item'>
        <NavLink to='/signin'>Sign In</NavLink>
      </li>
    </ul>
  );

  return (
    <nav className='nav-bar'>
      <ul className='nav-list'>
        <li className='nav-home'>
          <NavLink to='/'>Contact Manager</NavLink>
        </li>

        {authenticated ? authLinks : guestLinks}
      </ul>
    </nav>

    // Change Navbar color and bg color by defining new class
    // <Navbar bg='dark' variant='dark'>
    //   <Container>
    //     <LinkContainer to='/'>
    //       <Navbar.Brand>Home</Navbar.Brand>
    //     </LinkContainer>
    //     {authenticated ? authLinks : guestLinks}
    //   </Container>
    // </Navbar>
  );
}

export default AppNavbar;
