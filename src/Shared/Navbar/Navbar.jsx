import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import logo from '../../assets/logo.png';

const Navbar = () => {
  const { user, SignOutUser, loginWithGoogle, CreateUser, login } = useContext(AuthContext)

  const handleSignOut = () => {
    SignOutUser()

}



  const routeName = (
    <>
    
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "font-semibold" : "text-gray-400 hover:text-white"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? " font-semibold" : "text-gray-400 hover:text-white"
          }
          to="/alltoy"
        >
          All Toys
        </NavLink>
      </li>

      <>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "font-semibold " : "text-gray-400 hover:text-white"
            }
            to="/mytoy"
          >
            My Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "  font-semibold" : "text-gray-400 hover:text-white"
            }
            to="/addtoy"
          >
            Add A Toy
          </NavLink>
        </li>
      </>

      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? " font-semibold" : "text-gray-400 hover:text-white"
          }
          to="/blog"
        >
          Blogs
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="container mx-auto  ">
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {routeName}
            </ul>
          </div>
          <Link to="/"><img
            src={logo}
            className="w-8 md:w-16"
            alt=""
          /></Link>
          <Link to="/"><h2 className="font-bold md:text-xl">
            <span className="text-green-500">TOY</span> <span className="text-white">TOWN</span>
          </h2></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{routeName}</ul>
        </div>
        <div className="navbar-end">
        {
                        <div className="tooltip tooltip-left" data-tip={user?.displayName}>

                            {
                                user?.photoURL ? <img style={{ height: 50, width: 50 }} src={user.photoURL} className="rounded-full mx-5 " /> : ""
                            }

                        </div>
                    }
                    {
                        user ? <Link ><button onClick={handleSignOut} className="btn bg-rose-400 ">Log out</button>
                        </Link> : <Link to="/login"><button className="btn  bg-rose-400 hover:bg-zinc-500 ">Login</button>
                        </Link>
                    }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
