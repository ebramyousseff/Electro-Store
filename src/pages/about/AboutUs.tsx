import { useState } from "react";
import img1 from "../../assets/3column1.eb8f006da2d6b77cfc55.webp";
import img2 from "../../assets/3column2.df064a13402312aa3c8a.webp";
import img3 from "../../assets/3column3.e793d47455c54c829268.webp";
import img4 from "../../assets/Header.7c6d181f916e44f78be2.webp";
import img5 from "../../assets/people1.45cec50a79a51b36792c.webp";
import img6 from "../../assets/people2.0301fa380a63e46b0208.webp";
import img7 from "../../assets/people3.40c422f8ecd6a8ee8fc1.webp";
import img8 from "../../assets/people4.7e45b26ae1035fbabd16.webp";
import img9 from "../../assets/people5.ef970063e7f07430e9a2.webp";
import "./About.css";
import { FaPlus } from "react-icons/fa";
const AboutUs = () => {
  const [open, setOpen] = useState(false);
  const [isopen, setIsOpen] = useState(false);
  const [iopen, setIOpen] = useState(false);
  const [ropen, setROpen] = useState(false);

  return (
    <div className=" dark:bg-black text-black dark:text-white">
      <div className="relative ">
        <img src={img4} alt="" className="w-full object-cover h-[80vh]" />
        <div className="absolute custom-gradiant"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg max-w-[600px]">
            Passion may be a friendly or eager interest in or admiration for a
            proposal, cause, discovery, or activity or love to a feeling of
            unusual excitement.
          </p>
        </div>
      </div>
      <div className="w-full px-10 md:px-20 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 justify-between items-center">
        <div className="">
          <img src={img1} alt="" className="" />
          <div className="flex flex-col items-center px-2 py-3 gap-2">
            <h1 className="text-2xl font-semibold">What we really do?</h1>
            <p className="">
              Donec libero dolor, tincidunt id laoreet vitae, ullamcorper eu
              tortor. Maecenas pellentesque, dui vitae iaculis mattis, tortor
              nisi faucibus magna, vitae ultrices lacus purus vitae metus.
            </p>
          </div>
        </div>
        <div className="">
          <img src={img2} alt="" className="" />
          <div className="flex flex-col items-center px-2 py-3 gap-2">
            <h1 className="text-2xl font-semibold ">Our Vision</h1>
            <p className="">
              Donec libero dolor, tincidunt id laoreet vitae, ullamcorper eu
              tortor. Maecenas pellentesque, dui vitae iaculis mattis, tortor
              nisi faucibus magna, vitae ultrices lacus purus vitae metus.
            </p>
          </div>
        </div>
        <div className="">
          <img src={img3} alt="" className="" />
          <div className="flex flex-col items-center px-2 py-3 gap-2">
            <h1 className="text-2xl font-semibold">History of Beginning</h1>
            <p className="">
              Donec libero dolor, tincidunt id laoreet vitae, ullamcorper eu
              tortor. Maecenas pellentesque, dui vitae iaculis mattis, tortor
              nisi faucibus magna, vitae ultrices lacus purus vitae metus.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-200">
        <div className="lg:flex lg:flex-row grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-3 justify-around py-6">
          <div className="flex flex-col items-center justify-center">
            <img src={img5} alt="" className="rounded-full w-50" />
            <div className="text-black">
              <h1 className="">Thomas Snow</h1>
              <p className="">CEO/Founder</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src={img6} alt="" className="rounded-full w-50" />
            <div className="text-black">
              <h1 className="">Thomas Snow</h1>
              <p className="">CEO/Founder</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src={img7} alt="" className="rounded-full w-50" />
            <div className="text-black">
              <h1 className="">Thomas Snow</h1>
              <p className="">CEO/Founder</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src={img8} alt="" className="rounded-full w-50" />
            <div className="text-black">
              <h1 className="">Thomas Snow</h1>
              <p className="">CEO/Founder</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src={img9} alt="" className="rounded-full w-50" />
            <div className="text-black">
              <h1 className="">Thomas Snow</h1>
              <p className="">CEO/Founder</p>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 md:px-20 px-10 py-10 gap-2">
          <div className="flex flex-col items-center px-2 py-3 gap-2">
            <h1 className="text-2xl font-semibold">What we really do?</h1>
            <p className="">
              Donec libero dolor, tincidunt id laoreet vitae, ullamcorper eu
              tortor. Maecenas pellentesque, dui vitae iaculis mattis, tortor
              nisi faucibus magna, vitae ultrices lacus purus vitae metus. Ut
              nec odio facilisis, ultricies nunc eget, fringilla orci.
            </p>
          </div>
          <div className="flex flex-col items-center px-2 py-3 gap-2">
            <h1 className="text-2xl font-semibold">What we really do?</h1>
            <p className="">
              Donec libero dolor, tincidunt id laoreet vitae, ullamcorper eu
              tortor. Maecenas pellentesque, dui vitae iaculis mattis, tortor
              nisi faucibus magna, vitae ultrices lacus purus vitae metus. Ut
              nec odio facilisis, ultricies nunc eget, fringilla orci.
            </p>
          </div>
          <div className="">
            <div className="bg-gray-100 p-4 rounded-md shadow-md">
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center justify-between w-full translate-transform duration-300"
              >
                <div className="flex items-center gap-2 text-lg text-gray-700 font-medium">
                  <span
                    className={`transition-transform duration-300  p-2  ${
                      open ? "rotate-45 bg-main rounded-full transition-transform duration-300" : "rotate-0 "
                    }`}
                  >
                    <FaPlus />
                  </span>
                  Support 24/7
                </div>
              </button>

              {open && (
                <p className="mt-4 text-gray-500 translate-transform duration-400 bg-gray-100">
                  Vestibulum velit nibh, egestas vel faucibus vitae, feugiat
                  sollicitudin urna. Praesent iaculis id ipsum sit amet pretium.
                  Aliquam tristique sapien nec enim euismod, scelerisque
                  facilisis arcu consectetur.
                </p>
              )}
            </div>
            <div className="bg-gray-100 p-4 rounded-md shadow-md text-gray-700">
              <button
                onClick={() => setROpen(!ropen)}
                className="flex items-center justify-between w-full translate-transform duration-300"
              >
                <div className="flex items-center gap-2 text-lg font-medium">
                  <span
                    className={`transition-transform duration-300 text-black p-2  ${
                      ropen ? "rotate-45 bg-main rounded-full transition-transform duration-300" : "rotate-0 "
                    }`}
                  >
                    <FaPlus />
                  </span>
                  Best Quality
                </div>
              </button>

              {ropen && (
                <p className="mt-4 text-gray-500 translate-transform duration-400 bg-gray-100">
                  Vestibulum velit nibh, egestas vel faucibus vitae, feugiat
                  sollicitudin urna. Praesent iaculis id ipsum sit amet pretium.
                  Aliquam tristique sapien nec enim euismod, scelerisque
                  facilisis arcu consectetur.
                </p>
              )}
            </div>
            <div className="bg-gray-100 p-4 rounded-md shadow-md text-gray-700">
              <button
                onClick={() => setIOpen(!iopen)}
                className="flex items-center justify-between w-full translate-transform duration-300"
              >
                <div className="flex items-center gap-2 text-lg font-medium">
                  <span
                    className={`transition-transform duration-300 text-black p-2  ${
                      iopen ? "rotate-45 bg-main rounded-full transition-transform duration-300" : "rotate-0 "
                    }`}
                  >
                    <FaPlus />
                  </span>
                  Fastet Delivery
                </div>
              </button>

              {iopen && (
                <p className="mt-4 text-gray-500 translate-transform duration-400 bg-gray-100">
                  Vestibulum velit nibh, egestas vel faucibus vitae, feugiat
                  sollicitudin urna. Praesent iaculis id ipsum sit amet pretium.
                  Aliquam tristique sapien nec enim euismod, scelerisque
                  facilisis arcu consectetur.
                </p>
              )}
            </div>
            <div className="bg-gray-100 p-4 rounded-md shadow-md text-gray-700">
              <button
                onClick={() => setIsOpen(!isopen)}
                className="flex items-center justify-between w-full translate-transform duration-300"
              >
                <div className="flex items-center gap-2 text-lg font-medium">
                  <span
                    className={`transition-transform duration-300 text-black p-2  ${
                      isopen ? "rotate-45 bg-main rounded-full transition-transform duration-300" : "rotate-0 "
                    }`}
                  >
                    <FaPlus />
                  </span>
                  Customer Care
                </div>
              </button>

              {isopen && (
                <p className="mt-4 text-gray-500 translate-transform duration-400 bg-gray-100">
                  Vestibulum velit nibh, egestas vel faucibus vitae, feugiat
                  sollicitudin urna. Praesent iaculis id ipsum sit amet pretium.
                  Aliquam tristique sapien nec enim euismod, scelerisque
                  facilisis arcu consectetur.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
