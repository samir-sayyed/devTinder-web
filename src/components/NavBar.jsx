import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user = useSelector((state) => state.user)
    return (
        <div className="navbar bg-base-300">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">DevTinder</Link>
        </div>
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
               <li><a>Logout</a></li>
             </ul>
           </div>
         </div>
        }
       
      </div>
    )
}

export default Navbar   