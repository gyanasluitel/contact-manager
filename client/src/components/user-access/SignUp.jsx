import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import '../Form.css';
import { signUp } from '../../actions/userActions';

function SignUp() {
  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');
  // const [message, SetMessage] = useState(null);

  const { isAuthenticated } = useSelector((state) => state.user);
  // const error = useSelector((state) => state.error);

  const dispatch = useDispatch();

  // const mounted = useRef();
  // useEffect(() => {
  //   if (!mounted.current) {
  //     mounted.current = true;
  //   } else {
  //     if ()
  //   }
  // })

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      email,
      password,
    };

    dispatch(signUp(newUser));
    console.log('Sign Up Form Submitted');
    SetEmail('');
    SetPassword('');
  };

  if (isAuthenticated) return <Navigate to='/' />;
  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <legend className='form-heading'>Create An Account</legend>
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

export default SignUp;
