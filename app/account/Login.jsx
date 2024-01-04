import { useEffect, useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [err, setErr] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    const isValidEmail = /\S+@\S+\.\S+/.test(email);
    if (!isValidEmail) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      email: email, // Updated: Use 'email' instead of 'user'
      password: password,
    };

    try {
      const response = await fetch(
        "https://dorobantu-backend.vercel.app/api/v1/login",

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
        // console.log(data); // Logging response data
        localStorage.setItem("username", data.name);
        localStorage.setItem("userId", data.id);
        localStorage.setItem("isPaid", data.isPaid);
        localStorage.setItem("progress" , data.progress)
        window.location.href = "/account";
      } else {
        const errorData = await response.json(); // Parse the error response
        setErr(errorData.error);
      }
    } catch (error) {
      setErr("Network Error");
    }
  };
  return (
    <div className="poppins w-9/12 md:w-3/12 rounded-xl mx-auto bg-gray-50/10 border-2 border-gray-500 p-8">
      <h3 className="text-gray-50 text-xl sans font-bold mb-4 w-full text-center">
        Login to your account{" "}
      </h3>
      {err && (
        <p className="bg-red-500/20 border-2 border-red-500/80 text-xs p-2 rounded-md text-center text-red-300 mb-2 ">
          {err}
        </p>
      )}
      <form className="mx-auto w-10/12" onSubmit={handleSubmit}>
        <label className="text-xs sans text-gray-50">Email</label>
        <input
          type="email"
          required
          className="w-full text-sm mb-4 px-2 focus:outline-none bg-gray-400/50 rounded-md border-2 border-gray-900/20"
          value={email}
          onChange={handleEmailChange}
        />
        {emailError && (
          <p className="text-xs text-red-500 mb-2">{emailError}</p>
        )}

        <label className="text-xs sans text-gray-50">Password</label>
        <input
          type="password"
          className="w-full mb-4 text-sm px-2 focus:outline-none bg-gray-400/50 rounded-md border-2 border-gray-900/20"
          value={password}
          onChange={handlePasswordChange}
        />
        <button
          className="bg-green-300 text-sm font-semibold text-gray-900 px-4 py-1 text-md mt-4 rounded-md w-full"
          type="submit"
        >
          Sign in
        </button>
      </form>
    </div>
  );
}

export default Login;
