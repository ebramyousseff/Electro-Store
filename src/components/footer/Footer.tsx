import { FaHeadset, FaYoutube, FaWhatsapp, FaPinterest,FaWifi , FaLinkedin, FaInstagram, FaRegPaperPlane  } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { Link } from "react-router-dom";
import payment from '../../assets//patment-icon1.c354347a871eac7c6190.webp'

const Footer = () => {
  return (
    <footer className="w-full  dark:bg-black text-black dark:text-white">
      <div className="pt-10">
        <div className=" w-full bg-main py-3 ">
          <div className="flex flex-col gap-2 px-3 md:px-7 mx-10 lg:mx-0 lg:flex-row justify-around items-center">
            <div className="flex items-center text-lg md:text-2xl text-[#000]">
            <FaRegPaperPlane />
            Sign up to Newsletter
            </div>
            <div className="flex flex-nowrap text-[#000]">
            recive <span className="font-bold "> $20coupon for first shopping</span>
            </div>
            <div className="flex flex-nowrap">
              <input type="text" placeholder="Enter your email address" className="bg-[#000000e2] placeholder:text-gray-500 px-4 w-[14rem] md:w-[17rem] lg:w-[20rem] py-2 rounded-l-full"/>
              <button className="bg-black text-white rounded-r-full sm:px-7 px-3 py-2 text-">Signup</button>
            </div>
          </div>
        </div>
        <div className="xl:flex xl:flex-row grid lg:grid-cols-3 grid-cols-1 px-12 md:px-6 gap-3 justify-around items-center mb-9">
          <div className="flex flex-col justify-center gap-7 mr-4">
            <div className="text-5xl font-bold -tracking-wider">
              electro<span className="text-main text-[50px]">.</span>
            </div>
            <div className="flex gap-3">
              <FaHeadset className="text-main text-5xl" />
              <div className="flex flex-col">
                <div className="text-sm">Got Queestion ? Call us 24/7!</div>
                <div className="text-2xl">(800) 8001-8588, (0600) 874 548</div>
              </div>
            </div>
            <div>
              <p className="font-semibold">Contact info</p>
              <h3 className="">17 Princess Road, London, Greater London NW1 8JR, UK</h3>
            </div>
            <div className=" flex gap-3 text-2xl text-gray-500">
                <FaFacebook/>
                <FaWhatsapp/>
                <FaPinterest/>
                <FaLinkedin/>
                <FaInstagram/>
                <FaYoutube/>
                <FaWifi/>
            </div>
          </div>
          <div className="flex flex-col gap-8 justify-center py-15">
              <h1 className="text-2xl font-semibold">Find It Fast</h1>
              <div className="flex flex-col gap-2">
                <Link to="/">Laptops & Computes</Link>
                <Link to="/">Cameras & Photography</Link>
                <Link to="/">Smart Phones & Tables</Link>
                <Link to="/">Video Games & Consoles</Link>
                <Link to="/">TV & Audio</Link>
                <Link to="/">Gadgets</Link>
                <Link to="/">Waterproof Headphones</Link>
              </div>
          </div>
          <div className="flex flex-col gap-8 justify-center">
              <h1 className="text-lg font-semibold">Pages</h1>
              <div className="flex flex-col gap-2">
                <Link to="/">About</Link>
                <Link to="/">Contact</Link>
                <Link to="/">Wishlist</Link>
                <Link to="/">Compare</Link>
                <Link to="/">FAQ</Link>
                <Link to="/">Store Directory</Link>
              </div>
          </div>
          <div className="flex flex-col gap-8 justify-center">
              <h1 className="text-lg font-semibold">Customer Care</h1>
              <div className="flex flex-col gap-2">
                <Link to="/">My Account</Link>
                <Link to="/">Track your Order</Link>
                <Link to="/">Customer Service</Link>
                <Link to="/">Returns/ Exchange</Link>
                <Link to="/">FAQs</Link>
                <Link to="/">Product Support</Link>
              </div>
          </div>

        </div>
        <div className="flex flex-col md:flex-row justify-between bg-gray-200 items-center px-19">
        <div>© Electro - All Rights Reserved</div>
          <img src={payment} alt="payment" />
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
