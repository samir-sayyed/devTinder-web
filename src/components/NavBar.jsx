import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { BASE_URL } from "../utils/constants";

const Navbar = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutUser = async() => {
    try {
       await axios({
            method: "post",
            url: BASE_URL + "/logout",
            withCredentials: true,
        })
        dispatch(removeUser());
        return navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const user = useSelector((state) => state.user)
    return (
        <div className="navbar bg-base-300">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">DevTinder</Link>
        </div>
        {user?.user &&
             <div className="flex-none">
             <Link to="/connections" className="btn btn-ghost">Connections</Link>
           </div>
        }
        {
          user?.user &&
          <div className="flex-none gap-2">
           <h2>
             Welcome {user?.user?.firstName}
           </h2>
           <div className="dropdown dropdown-end mx-4">
             <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
               <div className="w-10 rounded-full">
                 <img
                   alt="Tailwind CSS Navbar component"
                   src={user?.user?.photo} />
               </div>
             </div>
             <ul
               tabIndex={0}
               className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
               <li>
                 <Link to="/profile" className="justify-between">
                   Profile
                 </Link>
               </li>
               <li><a>Settings</a></li>
               <li><a
                 onClick={logoutUser}>Logout</a></li>
             </ul>
           </div>
         </div>
        }
       
      </div>
    )
}

export default Navbar   