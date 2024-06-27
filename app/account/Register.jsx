"use client";

import { useState, useEffect } from "react";
function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [err, setErr] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    const isValidEmail = /\S+@\S+\.\S+/.test(email);
    if (!isValidEmail) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (password.length < 6) {
      setPasswordError("Password must have a minimum length of 6");
    } else {
      setPasswordError("");
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!passwordError && !emailError && email && password && username) {
      e.preventDefault();

      const userData = {
        name: username,
        email: email, // Updated: Use 'email' instead of 'user'
        password: password,
      };

      try {
        const response = await fetch(
          "https://dorobantu-backend.vercel.app/api/v1/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
          }
        );

        if (response.ok) {
          const data = await response.json();
          window.location.href = "/account";
        }
      } catch (error) {
        setErr("Email already registered");
      }
    }
  };
  return (
    <div className="slide-in poppins  w-9/12 md:w-3/12 rounded-xl mx-auto bg-gray-10/10 border-2 border-gray-500 p-8">
      <h3 className="text-gray-50 text-xl sans font-bold mb-4 w-full text-center">
        Register for an account{" "}
      </h3>
      {err && (
        <p className="bg-red-500/20 border-2 border-red-500/80 text-xs p-2 rounded-md text-center text-red-300 mb-2 ">
          {err}
        </p>
      )}
      <form className="mx-auto w-10/12" onSubmit={handleSubmit}>
        <label className="text-xs sans text-gray-50 ">Username</label>
        <input
          type="text"
          className=" w-full text-sm mb-4 px-2 focus:outline-none bg-gray-400/50 rounded-md border-2 border-gray-900/20"
          value={username}
          onChange={handleUsernameChange}
        ></input>
        <label className="text-xs sans text-gray-50">Email</label>
        <input
          type="email"
          className=" w-full text-sm mb-4 px-2 focus:outline-none bg-gray-400/50 rounded-md border-2 border-gray-900/20"
          value={email}
          onChange={handleEmailChange}
        ></input>
        {emailError && (
          <p className="text-xs text-red-500 mb-2">{emailError}</p>
        )}
        <label className="text-xs sans text-gray-50">Password</label>

        <input
          type="password"
          className="w-full px-2 text-sm focus:outline-none mb-4 bg-gray-400/50 rounded-md border-2  border-gray-900/20"
          value={password}
          onChange={handlePasswordChange}
        ></input>
        {passwordError && (
          <p className="text-xs text-red-500 mb-2">{passwordError}</p>
        )}
        <button className="bg-green-300 text-sm font-semibold text-gray-900 px-4 py-1 text-md mt-4 rounded-md w-full">
          Sign up
        </button>
      </form>
    </div>
  );
}

export default Register;
