import React, { useState } from "react";
import { FaSpotify } from "react-icons/fa";
import { Link, useNavigate } from "react-router";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    if (username && password) {
      alert(`Login as ${username}`);
      navigate("/");
    } else {
      alert("Please fill all details");
    }
  };

  return (
    <div className="login-page">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          background: "black",
          width: "100%",
          height: "12vh",
          fontSize: "4vh",
        }}
      >
        <Link
          style={{
            textDecoration: "none",
          }}
          to="/"
        >
          <div className="passion-one-black log-spotify">
            <FaSpotify color="rgb(20, 155, 71)" /> <span>Spotify Playlist</span>
          </div>
        </Link>
      </div>

      <form
        onSubmit={handleSignUp}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          gap: "2vh",
          margin: "50px",
        }}
      >
        <h1>Login to Your Account ...😊</h1>

        <input
          style={{
            border: "1px solid white",
            borderRadius: "8px",
            color: "white",
            background: "black",
            padding: "5px",
          }}
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          style={{
            border: "1px solid white",
            borderRadius: "8px",
            color: "white",
            background: "black",
            padding: "5px",
          }}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          style={{
            color: "black",
            fontWeight: "700",
            background: "rgb(20, 155, 71)",
            border: "3px solid green",
            borderRadius: "15px",
            padding: "6px 14px",
            marginTop: "10px",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
