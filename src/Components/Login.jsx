import React from "react";

export default function Login() {
  const [user, setUser] = React.useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <input
          onChange={handleChange}
          type="text"
          placeholder="user_id"
          name="name"
        />{" "}
        <br />
        <input
          onChange={handleChange}
          type="password"
          name="password"
          placeholder="password"
        />{" "}
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}
