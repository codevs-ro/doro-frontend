"use client";

import { useState } from "react";
function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = async (e) => {
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
      } else {
        console.error("Register  failed");
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };
  return (
    <div className="w-4/12 rounded-xl mx-auto bg-gray-100 p-8">
      <h3 className="text-gray-900 text-xl sans font-bold mb-4 w-full text-center">
        Hi there!
      </h3>
      <form className="mx-auto w-10/12" onSubmit={handleSubmit}>
        <label className="text-sm sans text-gray-700 font-semibold">
          Username
        </label>
        <input
          type="text"
          className=" w-full mb-4 bg-gray-400/50 rounded-md border-2 border-gray-900/20"
          value={username}
          onChange={handleUsernameChange}
        ></input>
        <label className="text-sm sans text-gray-700 font-semibold">
          Email
        </label>
        <input
          type="email"
          className=" w-full mb-4 bg-gray-400/50 rounded-md border-2 border-gray-900/20"
          value={email}
          onChange={handleEmailChange}
        ></input>
        <label className="text-sm sans text-gray-700 font-semibold">
          Password
        </label>

        <input
          type="password"
          className="w-full  mb-4 bg-gray-400/50 rounded-md border-2  border-gray-900/20"
          value={password}
          onChange={handlePasswordChange}
        ></input>
        <button className="bg-red-200 text-gray-900 font-bold px-4 py-2 text-md mt-4 rounded-md w-full">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
