import { useState } from "react";

import TablePage from "./Table";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://frontendtestapi.staging.fastjobs.io/auth/login",
        {
          method: "POST",
          body: JSON.stringify({
            "username": username,
            "password": password,
          }),
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
     
      if (response.ok) {
        console.log(document.cookie);
        const data = await response.json();
        setIsLoggedIn(true);
        // Redirect to the table page
        // window.location.href = "/table";
      } else {
        setErrorMessage("Please check your username and password");
      }
      
    } catch (error) {
      console.error(error);
    }
  };
 console.log(isLoggedIn);
  return (
    <div className=" main-conatiner grid  overflow-hidden text-center flex justify-center ">
      {isLoggedIn ? (
     
        <TablePage />
        
      ) : (
        <>
          <div className="left-container   h-screen">
            <img
              src="src\logo\Screenshot (24).png"
              className="w-20 absolute top-9 left-28"
              alt=""
            />
            <div className="absolute left-16 top-44">
              <h4 className="text-md text-white   ">Congratulations!</h4>
              <h2 className="text-2xl text-white ml-9 mb-5 mt-4  w-72 ">
                Company XYZ is inviting you to take an interview
              </h2>
              <span className="text-sm text-white relative  ">
                Skills being assessed:
              </span>
              <div className="flex">
                <p className="p-2 m-2 border-2 text-white  rounded-full">
                  UI/UX
                </p>
                <p className="p-2 m-2 border-2 text-white rounded-full">
                  Product Design
                </p>
                <p className="p-2 m-2 border-2 text-white rounded-full">
                  Motion Graphics
                </p>
              </div>
              <p className="text-white">Don’t be nervous.</p>
            </div>
            <div className=" large-circle  absolute  "></div>
            <div className=" mid-circle  absolute "></div>
            <div className=" small-circle    absolute  "></div>
          </div>
          <form className="bg-black " onSubmit={handleLogin}>
            <div className="relative top-20">
              <h1 className="text-white text-2xl w-44 top-16 left-44 absolute bottom-32">
                For us to stay in touch
              </h1>

              <div className="mb-3 h-56">
                <label
                  htmlFor="username"
                  className="text-white relative top-40 bottom-1 left-16"
                >
                  Username
                </label>
                <input
                  type="text"
                  className="form-control border-2 top-48 rounded-md text-white border-gray-300 bg-black relative right-5 "
                  id="username"
                  name="username"
                  value={username}
                  onChange={handleUsernameChange}
                  required
                />
              </div>
              <div className="mb-3 h-14">
                <label
                  htmlFor="password"
                  className="text-white bottom-1  left-16 relative"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="form-control top-6 relative right-4 bg-black text-white rounded-md border-2"
                  id="password"
                  name="password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
              </div>
              <button
                type="submit"
                className="text-white  relative left-6 rounded-md h-8 bg-slate-300"
              >
                Login
              </button>
              {errorMessage && (
                <div className="text-white" role="alert">
                  {errorMessage}
                </div>
              )}
            </div>
          </form>
        </>
      )}
    </div>
  );
}

export default LoginPage;
