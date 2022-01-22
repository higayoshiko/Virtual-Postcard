import React from "react";

const Login = ({ authService }) => {
  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent) // provider name
      .then(console.log);
  };
  return (
    <section>
      <section>
        <h1>login</h1>
        <ul>
          <li>
            <button onClick={onLogin}>Google</button>
          </li>
          <li>
            <button onClick={onLogin}>Github</button>
          </li>
        </ul>
      </section>
    </section>
  );
};

export default Login;
