import {Link} from "react-router-dom"
import logo from "../../../src/assets/assets/logo.svg"
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {

  const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () =>{
    logOut()
    .then(() =>{})
    .catch( error => console.log(error))
  }

    const navitems = <>
        <li><Link to="/">Home</Link></li>       
        <li><Link to="/">About</Link></li>
        <li><Link to="/">Service</Link></li>
        <li><Link to="/">Blog</Link></li>
        <li><Link to="/">Contact</Link></li>
        { user?.email ? <>
             <li><Link to="/bookings">My Bookings</Link></li>
             <li><button onClick={handleLogOut}>LogOut</button></li> 
        </> 
             : <li><Link to="/login">LogIn </Link></li> 
        }
    </>
    return (
        <div>
           <div className="navbar bg-base-100 h-28 mb-4">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {navitems}
      </ul>
    </div>
    <Link to="/" className="btn btn-ghost text-xl">
      <img src={logo} alt="" />
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navitems}
    </ul>
  </div>
  <div className="navbar-end">
    <a ><button className="btn btn-outline  bg-[#ff3811] text-white">Appoinment</button></a>
  </div>
</div>
        </div>
    );
};

export default Navbar;