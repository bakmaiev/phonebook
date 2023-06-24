import React from 'react';

const Login = () => {
  return (
    <div>
      <form>
        <input type="email" name="email" id="email" placeholder="email" />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
