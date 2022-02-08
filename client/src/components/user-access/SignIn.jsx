import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { signIn } from '../../actions/userActions';

import '../Form.css';

function SignIn() {
  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');

  const { isAuthenticated } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      email,
      password,
    };

    dispatch(signIn(user));
    SetEmail('');
    SetPassword('');
  };

  if (isAuthenticated) return <Navigate to='/' />;

  return (
    <div>
      <h1>Sign In Form</h1>

      <form className='form' onSubmit={handleSubmit}>
        <div className='form-item'>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            placeholder='Enter Email'
            value={email}
            name='email'
            onChange={(event) => SetEmail(event.target.value)}
            required
          />
        </div>

        <div className='form-item'>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            placeholder='Enter Password'
            value={password}
            name='password'
            onChange={(event) => SetPassword(event.target.value)}
            required
          />
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
}

export default SignIn;
