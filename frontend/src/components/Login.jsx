import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css'


function Login() {
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(false);
  const BASE_URL = "http://localhost:8080";
  const navigate = useNavigate();

  const handleInput = (e) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError(null);
    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
      });

      const data = await response.json();
      localStorage.setItem("token", data.token);
      setUser(true);
      navigate("/posts");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="flex flex-col justify-center text-center align-middle p-20">
      <h2 className="text-4xl">Log in</h2>
      <label htmlFor="username">Username</label>
      <input
        className="rounded-lg"
        type="text"
        name="username"
        id="username"
        value={formValues.username}
        onChange={handleInput}
      />
      <br />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        value={formValues.password}
        onChange={handleInput}
      />{" "}
      <br />
      <button onSubmit={handleSubmit}>Submit</button>
    </form>
  );
}

export default Login;
