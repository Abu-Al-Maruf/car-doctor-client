import { MdOutlineShoppingBag } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-16 py-4">
      <Link to={"/"}>
        <img className="w-20" src={logo} alt="logo" />
      </Link>

      <ul className="flex items-center gap-8 text-lg text-[#444] font-semibold">
        <li>
          <Link>Home</Link>
        </li>
        <li>
          <Link>About</Link>
        </li>
        <li>
          <Link>Services</Link>
        </li>
        <li>
          <Link>Blog</Link>
        </li>
        <li>
          <Link>Contact</Link>
        </li>
      </ul>

      <div className="flex items-center gap-6 text-2xl">
        <MdOutlineShoppingBag className="cursor-pointer " />
        <IoSearchOutline className="cursor-pointer mr-3 " />
        <button className="text-[#FF3811] text-sm font-semibold py-4 px-7 rounded-md border border-[#FF3811] hover:text-white hover:bg-[#FF3811] transition-all">
          Appointment
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
