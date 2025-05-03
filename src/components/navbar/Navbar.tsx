import {
  FaLocationDot,
  FaBagShopping,
  FaArrowRightArrowLeft,
  FaTruck,
  FaUser,
  FaRegHeart,
  
} from "react-icons/fa6";

import {FaSearch} from 'react-icons/fa'
import { IoCloseOutline } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../redux/store";
import { auth } from "../../firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import axiosInstance from "../../api/axiosInstance";
import Cookies from "js-cookie";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const cartProducts = useAppSelector((state) => state.cart.products);
  const totalPrice = useAppSelector((state) => state.cart.totalPrice);
const navigate = useNavigate()

  const [menuToggle, setMenuToggle] = useState(false);
  const [onToggleAuth, setOnToggleAuth] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchParams] = useSearchParams();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      Cookies.remove("user");
      setIsLoggedIn(false);
      navigate("/register");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };
  useEffect(() => {
    axiosInstance.post(`/filter/?${searchParams.toString()}`);
  }, [searchParams]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        Cookies.set("user", JSON.stringify({ uid: user.uid, email: user.email }));
        setIsLoggedIn(true);
      } else {
        Cookies.remove("user");
        setIsLoggedIn(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleAuthToggle = () => {
    setOnToggleAuth(!onToggleAuth);
  };

  const changeToggle = () => {
    setMenuToggle(!menuToggle);
  };

  

  return (
    <nav className=" dark:bg-black text-black dark:text-white">
      <div className="relative">
        {/* Sidebar Menu */}
        <div
          className={`fixed top-0 left-0 h-[300px] w-[200px] z-10 bg-white shadow-lg shadow-gray-400 transform transition-transform duration-300 ${
            menuToggle ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <IoCloseOutline
            className="text-2xl cursor-pointer absolute top-3 right-3 text-black"
            onClick={changeToggle}
          />
          <ul className="flex flex-col gap-4 pl-15 pt-12 text-black">
            <li><Link to="/" onClick={changeToggle}>Home</Link></li>
            <li><Link to="/about" onClick={changeToggle}>About Us</Link></li>
            <li><Link to="/feature" onClick={changeToggle}>Feature</Link></li>
            <li><Link to="/contact" onClick={changeToggle}>Contact Us</Link></li>
          </ul>
        </div>

        {/* Top Bar */}
        <div className="hidden text-sm lg:flex justify-between items-center text-gray-500 h-8">
          <div className="min-w-[375px] justify-center flex">
            <h3 className="hover:text-black cursor-pointer">
              Welcome to Worldwide Electronics Store
            </h3>
          </div>
          <ul className="w-[574px] flex gap-2">
            <Link to="/"><li className="flex items-center gap-2 navbar"> <FaLocationDot /> Store Locator</li></Link>
            <Link to="/"><li className="flex items-center gap-2 navbar"> <FaTruck /> Track Your Order</li></Link>
            <li className="flex items-center gap-2 navbar"><FaBagShopping /> Shop</li>
            <li className="flex items-center gap-2 navbar"><FaUser /> My Account</li>
          </ul>
        </div>

        {/* Main Header */}
        <div className="hidden lg:flex py-5">
          <div className="flex justify-around items-center w-full">
            <div className="flex min-w-[250px]">
              <Link to="/"><h1 className="text-5xl font-bold">electro<span className="text-main">.</span></h1></Link>
            </div>

            {/* Search */}
            <div className="flex items-center gap-3">
              <FiMenu className="text-4xl cursor-pointer" onClick={changeToggle} />
              <div className="flex">
                <input
                  type="text"
                  placeholder="Search Product"
                  className="px-5 py-3 rounded-l-full bg-[#212020] text-white w-[25rem]"
                  
                />
                <button className="bg-main rounded-r-full p-4">
                  <FaSearch className="text-white text-xl" />
                </button>
              </div>
            </div>

            {/* Icons */}
            <div className="flex gap-6 text-xl items-center">
              <Link to="/compare"><FaArrowRightArrowLeft /></Link>
              <Link to="/wishList"><FaRegHeart /></Link>
              <div className="relative">
                <FaUser onClick={handleAuthToggle} className="cursor-pointer" />
                {/* Dropdown */}
                <div className={`absolute top-10 left-[-195px] transition-all duration-300 z-20 w-60 p-4 bg-gray-200 dark:bg-black border-t-[3px] rounded-b-lg shadow-lg ${
                  onToggleAuth ? "translate-y-3 opacity-100" : "translate-y-0 opacity-0"
                }`}>
                  <div className="flex flex-col items-center text-black dark:text-white">
                    {isLoggedIn ? (
                      <>
                        <p className="mb-2 text-lg">Welcome back!</p>
                        
                          <button onClick={handleLogout}  className="bg-main text-black px-4 py-1 rounded">
                            Logout
                          </button>
                        
                      </>
                    ) : (
                      <>
                        <p className="mb-2 text-lg">Returning Customer?</p>
                        <Link to="/register" onClick={handleAuthToggle}>
                          <button className="bg-main text-black px-3 py-1 text-sm rounded mb-2">
                            Sign in
                          </button>
                        </Link>
                        <p className="mb-2 text-lg">Don't have an account?</p>
                        <Link to="/register" onClick={handleAuthToggle}>
                          <button className="dark:bg-gray-800 text-gray-500 px-4 text-md rounded">
                            Register
                          </button>
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              </div>
              {/* Cart */}
              <div className="relative">
                <Link to="/cart">
                  <FaBagShopping />
                  <span className="absolute top-3 -right-1 text-black bg-main text-sm rounded-full px-1">
                    {cartProducts.length}
                  </span>
                </Link>
              </div>
              <div>${totalPrice.toFixed(0)}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="flex lg:hidden bg-main justify-between items-center py-1 px-3">
        <div className="text-black flex items-center gap-2">
          <FiMenu className="text-2xl cursor-pointer" onClick={changeToggle} />
          <div className="text-4xl font-bold">electro</div>
        </div>
        <div className="text-white flex gap-4">
        <Link to="/compare"><FaArrowRightArrowLeft /></Link>
        <Link to="/wishList"><FaRegHeart /></Link>
          <div className="relative">
                <FaUser onClick={handleAuthToggle} className="cursor-pointer" />
                {/* Dropdown */}
                <div className={`absolute top-10 left-[-195px] transition-all duration-300 z-20 w-60 p-4 bg-gray-200 dark:bg-black border-t-[3px] rounded-b-lg shadow-lg ${
                  onToggleAuth ? "translate-y-3 opacity-100" : "translate-y-0 opacity-0"
                }`}>
                  <div className="flex flex-col items-center text-black dark:text-white">
                    {isLoggedIn ? (
                      <>
                        <p className="mb-2 text-lg">Welcome back!</p>
                        
                          <button onClick={handleLogout}  className="bg-main text-black px-4 py-1 rounded">
                            Logout
                          </button>
                        
                      </>
                    ) : (
                      <>
                        <p className="mb-2 text-lg">Returning Customer?</p>
                        <Link to="/register" onClick={handleAuthToggle}>
                          <button className="bg-main text-black px-3 py-1 text-sm rounded mb-2">
                            Sign in
                          </button>
                        </Link>
                        <p className="mb-2 text-lg">Don't have an account?</p>
                        <Link to="/register" onClick={handleAuthToggle}>
                          <button className="dark:bg-gray-800 text-gray-500 px-4 text-md rounded">
                            Register
                          </button>
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <Link to="/cart">
                  <FaBagShopping />
                </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
