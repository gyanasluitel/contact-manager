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
      <form className='form' onSubmit={handleSubmit}>
        <legend className='form-heading'>Sign In To Your Account</legend>
        <div className='form-item'>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            placeholder='example@gmail.com'
            value={email}
            name='email'
            className='form-input'
            onChange={(event) => SetEmail(event.target.value)}
            required
          />
        </div>

        <div className='form-item'>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            placeholder='*******'
            value={password}
            name='password'
            className='form-input'
            onChange={(event) => SetPassword(event.target.value)}
            required
          />
        </div>

        <button className='btn-submit-form'>Submit</button>
      </form>
    </div>
  );
}

export default SignIn;
