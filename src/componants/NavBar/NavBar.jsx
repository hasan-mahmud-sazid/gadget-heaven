import { Link, NavLink, useLocation } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GiSelfLove } from "react-icons/gi";
import { getStoredCartList } from "../../utility/addtoCart";
import { useEffect, useState } from "react";
import { getWishList } from "../../utility/addtoWishList";

const NavBar = () => {
  const location = useLocation();
  const isDetailsPage =
    location.pathname.includes("/product/") ||
    location.pathname.includes("/dashboard");
  const [cartCount, setCartCount] = useState(0);
  const [wishCount, setWishCount] = useState(0);

  useEffect(() => {
    const updateCount = () => {
      setCartCount(getStoredCartList().length);
    };

    const updateWishCount = () => {
      setWishCount(getWishList().length);
    };

    updateCount();
    updateWishCount();

    window.addEventListener("storage", updateCount);
    window.addEventListener("wish-storage", updateWishCount);

    return () => {
      window.removeEventListener("storage", updateCount);
      window.removeEventListener("wish-storage", updateWishCount);
    };
  }, []);

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
      <li>
        <NavLink to="/statistics">Statistics</NavLink>
      </li>
      <li>
        <NavLink to="/compare">Compare</NavLink>
      </li>
    </>
  );

  return (
    <div
      className={`transition-all duration-300 navbar mt-6 rounded-t-lg ${
        isDetailsPage
          ? "bg-white text-black shadow-sm"
          : "bg-[#9538E2] text-white"
      }`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-bold"
          >
            {links}
          </ul>
        </div>
        <NavLink to="/" className="text-2xl font-bold">
          Gadget Heaven
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold">{links}</ul>
      </div>
      <div className="navbar-end gap-5 px-4">
        <NavLink to="/dashboard">
          <div className="relative cursor-pointer bg-white p-2 rounded-full border shadow-sm text-black">
            <MdOutlineShoppingCart className="text-xl" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white">
              {cartCount}
            </span>
          </div>
        </NavLink>

        <NavLink to="/dashboard">
          <div className="relative cursor-pointer bg-white p-2 rounded-full border shadow-sm text-black">
            <GiSelfLove className="text-xl" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white">
              {wishCount}
            </span>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
