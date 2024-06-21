import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  const [user, setUser] = useState(false);

  useEffect(() => {
    const isToken = localStorage.getItem("token");
    if (isToken) setUser(true);
  }, []);

  const handleLogout = () => {
    setUser(false);
    localStorage.removeItem("token");
  };

  return (
    <header className="flex gap-7 bg-re">
      {" "}
      <nav>
        {!user ? (
          <>
            <Link to="/login">Login</Link>
            {"  |  "}
            <Link to="/signup">Signup</Link>
          </>
        ) : (
          <button onClick={handleLogout}>Logout</button>
        )}
        {"  |  "}
        <Link to="/posts">Posts</Link>
      </nav>
    </header>
  );
};

export default Header;
