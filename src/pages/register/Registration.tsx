import { useNavigate } from "react-router-dom";
import "./Registration.css";
import signUp from '../../features/auth/signUp.ts'
import loginFeature from "../../features/auth/login.ts";

const Registration = () => {
const navigate = useNavigate();

 
  return (
    <div className="w-full px-8 md:px-19 py-15 dark:bg-black text-black dark:text-white">
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="w-full flex flex-col">
          <div className="under border-gray-300 border-b-[1px] w-full ">
            <h1 className="font-semibold text-3xl pb-3">Login</h1>
          </div>
          <div className="py-4 ">
            <h3 className="text-[16px] pb-8">
              Welcome back! Sign in to your account
            </h3>
            <form className="flex flex-col gap-4" onSubmit={(e)=>{
            loginFeature(e , navigate)
          }}>
              <label className="text-gray-500">Username or email address</label>
              <input
              name="email"
                type="text"
                className="rounded-full outline-none border-[1px] border-gray-400 bg-gray-300 py-2 px-4"
              />
              <label htmlFor="" className="text-gray-500">
                Password
              </label>
              <input
              name="password"
                type="password"
                className="rounded-full outline-none border-[1px] border-gray-400 bg-gray-300 py-2 px-4"
              />
              <div className="flex gap-2">
                <input type="checkbox" className="" />
                <h3 className="text-gray-500">Remeber me</h3>
              </div>
              <button className="bg-[#ffb624] cursor-pointer py-3 max-w-20 px-2 rounded-full">
                Log in
              </button>
              <button className="hover:underline cursor-pointer">
                Lost Your Password
              </button>
            </form>
          </div>
        </div>
        <div className="lineUp font-semibold text-lg hidden lg:flex"><span className="absolute bottom-74 -right-3">or</span></div>
        <div className="py-4">
          <div className="under border-gray-300 border-b-[1px] w-full ">
            <h3 className="font-semibold text-3xl pb-3">Register</h3>
          </div>
          <div className="py-4">
            <h3 className="text-[16px] pb-8">
              Create new account today to reap the benefits of a personalized
              shopping experience.
            </h3>
            <form className="flex flex-col gap-4" onSubmit={(e)=>signUp(e,navigate)}>
              <label className="text-gray-500">Username </label>
              <input
              name="firstName"
                type="text"
                className="rounded-full outline-none bg-gray-300 py-2 px-4 border-[1px] border-gray-400 placeholder:text-gray-500"
                placeholder="User name"
              />
              <label className="text-gray-500">Email </label>
              <input
              name="email"
                type="text"
                className="rounded-full outline-none bg-gray-300 py-2 px-4 placeholder:text-gray-500 border-[1px] border-gray-400"
                placeholder="email"
              />
              <label htmlFor="" className="text-gray-500">
                Password
              </label>
              <input
              name="password"
                type="password"
                placeholder="password"
                className="rounded-full outline-none bg-gray-300 py-2 px-4 border-[1px] border-gray-400"
              />
              <h3 className="text-[16px] pb-8">
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our privacy policy.
              </h3>
              <button type="submit" className="bg-[#ffb624] max-w-20 cursor-pointer py-3 px-2 rounded-full">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
