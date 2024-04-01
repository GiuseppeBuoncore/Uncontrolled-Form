import { useState } from "react";

function userData() {
  return {
    username: "",
    password: "",
    session: false,
  };
}

function Login() {
  const [data, setData] = useState(userData());

  function handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const checked = event.target.checked;
    const type = event.target.type;

    setData((d) => {
      return {
        ...d,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleResetForm() {
    setData({
      username: "",
      password: "",
      session: false,
    });
  }

  const handleLogin = (event) => {
    event.preventDefault();

    console.log(data.username);
    console.log(data.password);
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        name="username"
        value={data.username}
        onChange={handleInputChange}
      />
      <input
        name="password"
        type="password"
        value={data.password}
        onChange={handleInputChange}
      />
      <input
        name="session"
        type="checkbox"
        checked={data.session}
        onChange={handleInputChange}
      />
      <button onClick={handleResetForm}>Reset</button>
      <button disabled={!data.username || !data.password} type="submit">
        Login
      </button>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </form>
  );
}

export default Login;
