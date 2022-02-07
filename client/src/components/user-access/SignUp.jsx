import { useState } from 'react';
import '../Form.css';

function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Sign Up Form Submitted');
    SetEmail('');
    SetPassword('');
  };

  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');

  return (
    <div>
      <h1>Sign Up Form</h1>

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

      <hr />
      <p>Email: {email}</p>
      <p>Password: {password}</p>
    </div>
  );
}

export default SignUp;
