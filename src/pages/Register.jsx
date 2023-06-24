import React from 'react';

const Register = () => {
  return (
    <div>
      <form>
        <input type="text" name="name" id="name" placeholder="name" />
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

export default Register;
