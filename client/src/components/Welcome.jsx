import './Welcome.css';
import { NavLink } from 'react-router-dom';

function Welcome() {
  return (
    <div className='welcome-container'>
      <div className='msg-box'>
        <h3 className='msg-heading'>Welcome to the Contact Manager</h3>
        <div className='msg-content'>
          <p>
            Please{' '}
            <NavLink to='/signin' style={{ textDecoration: 'none' }}>
              sign in!
            </NavLink>
          </p>
          <p>
            If you don't have an account, please{' '}
            <NavLink to='/signup' style={{ textDecoration: 'none' }}>
              sign up!
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
