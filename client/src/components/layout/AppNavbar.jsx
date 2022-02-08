import { NavLink, Outlet } from 'react-router-dom';
// import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AppNavbar.css';
import { signOut } from '../../actions/userActions';

function AppNavbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    dispatch(signOut());
    toast.success('Signed out');
    navigate('/');
  };

  const authLinks = (
    <ul className='nav-details'>
      <li className='nav-item'>
        <button className='btn-signout' onClick={handleSignOut}>
          Sign Out
        </button>
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

  const { isAuthenticated } = useSelector((state) => state.user);

  return (
    <>
      <nav className='nav-bar'>
        <ul className='nav-list'>
          <li className='nav-home'>
            <NavLink to='/'>Contact Manager</NavLink>
          </li>

          {isAuthenticated ? authLinks : guestLinks}
        </ul>
      </nav>
      <ToastContainer
        position='top-right'
        autoClose={200}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />{' '}
      <Outlet />
    </>
  );
}

export default AppNavbar;
