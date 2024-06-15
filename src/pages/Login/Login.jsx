import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import loginImg from "../../assets/images/login/login.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
    const { loginUser } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        loginUser(email, password)
        .then((res) => {
          console.log(res.user);
        })
        .catch((error) => {
          console.log(error);
        });
      };


  return (
    <div className="min-h-screen flex gap-10 py-20 items-center justify-center bg-gray-100">
      <div className="w-full md:w-1/2 p-6 flex items-center justify-center">
        <img src={loginImg} alt="Login" className="w-2/4" />
      </div>

      <div className="w-full md:w-1/3 p-10 border border-gray-300 rounded-lg ">
        <h2 className="text-2xl font-bold text-center mb-8">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
            />
          </div>
          <button className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transition duration-200">
            Sign In
          </button>
        </form>
        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="mx-4 text-gray-400">or Sign In with</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>
        <div className="flex justify-center space-x-4 mb-6">
          <button className="text-blue-600 hover:text-blue-800 transition duration-200">
            <FaFacebook size={32} />
          </button>
          <button className="text-blue-400 hover:text-blue-600 transition duration-200">
            <FaLinkedin size={32} />
          </button>
          <button className="text-red-500 hover:text-red-700 transition duration-200">
            <FcGoogle size={32} />
          </button>
        </div>
        <div className="text-center">
          <p className="text-gray-600">
            Don&apos;t have an account?
            <Link to={"/signup"} className="text-indigo-500 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
