import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants.js";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice.js";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const LogIn = () => {
  const [email, setEmail] = useState("samir@gmail.com");
  const [password, setPassword] = useState("Samir@123");
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  if (user.user != null) {
    navigate("/");
  }

  const logIn = async () => {
    try {
      if (email === "" && password === "") {
        alert("Please check your credentials");
      }
      const res = await axios({
        method: "post",
        url: BASE_URL + "/login",
        data: {
          emailId: email,
          password: password,
        },
        withCredentials: true,
      });
      if(res.status == 200) {
        dispatch(addUser(res.data.user));
        navigate("/");
      }else {
        alert(res.data.message);
      }
    } catch (error) {
      setError(error?.response?.data ?? "Something went wrong");
    }
  };

  return (
    <div className="flex justify-center my-8">
      <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title flex justify-center">Log In</h2>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="grow"
              placeholder="Email"
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="text"
              className="grow"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </label>

          <div className="form-control">
           <p className="text-red-500">{error}</p>
          </div>

          <label className="label">
            <Link
              to="/forgotPassword"
              className="label-text-alt link link-hover opacity-70"
            >
              Forgot password?
            </Link>
          </label>

          <p className="text-sm opacity-70">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-500">
              Sign Up
            </Link>
          </p>
          <div className="card-actions justify-center mt-4">
            <button className="btn btn-primary w-full" onClick={logIn}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
