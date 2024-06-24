import React from 'react';
import LoginForm from '../components/LoginForm';

const LoginPage = ({ login }) => {
  return (
    <div>
      <h1>Login</h1>
      <LoginForm login={login} />
    </div>
  );
};

export default LoginPage;
