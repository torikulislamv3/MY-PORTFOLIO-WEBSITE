import { useEffect, useState } from "react";

const Navbar = () => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScrollTop(scrollTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <div className={`navbar bg-base-100 bg-opacity-5 sticky w-full z-50 border transition-transform duration-300 ${hidden ? '-top-full' : 'top-0'}`}>
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
            <button>
              <a href="/">
                <li className="text-lg text-[#007BFF] hover:underline">Home</li>
              </a>
            </button>
            <button>
              <a href="#introduction">
                <li className="text-lg text-[#007BFF] hover:underline">About Me</li>
              </a>
            </button>
            <button>
              <a href="#myProject">
                <li className="text-lg text-[#007BFF] hover:underline">Projects</li>
              </a>
            </button>
            <button>
              <a href="#skills">
                <li className="text-lg text-[#007BFF] hover:underline">Skills</li>
              </a>
            </button>
            <button>
              <a href="#contact">
                <li className="text-lg text-[#007BFF] hover:underline">Contact</li>
              </a>
            </button>
            <button>
              <a href="#education">
                <li className="text-lg text-[#007BFF] hover:underline">My Education</li>
              </a>
            </button>
          </ul>
        </div>
        <div className="avatar online ava">
          <div className="w-24 rounded-full">
            <img src="https://i.ibb.co/RCtxf18/face-logo-8252748-1280.png" alt="avatar"/>
          </div>
        </div>
        <p className="pl-5 text-xl font-bold tracking-widest text-[#007BFF] hover:text-[#28A745]">DEVELOPER</p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <button>
            <a href="/">
              <li className="text-lg text-[#007BFF] mr-5 hover:underline">Home</li>
            </a>
          </button>
          <button>
            <a href="#introduction">
              <li className="text-lg text-[#007BFF] mr-5 hover:underline">About Me</li>
            </a>
          </button>
          <button>
            <a href="#myProject">
              <li className="text-lg text-[#007BFF] mr-5 hover:underline">Projects</li>
            </a>
          </button>
          <button>
            <a href="#skills">
              <li className="text-lg text-[#007BFF] mr-5 hover:underline">Skills</li>
            </a>
          </button>
          <button>
            <a href="#contact">
              <li className="text-lg text-[#007BFF] mr-5 hover:underline">Contact</li>
            </a>
          </button>
          <button>
            <a href="#education">
              <li className="text-lg text-[#007BFF] mr-5 hover:underline">My Education</li>
            </a>
          </button>
        </ul>
      </div>
      {/* <div className="navbar-end">
        <button className="btn btn-outline rounded-full text-white bg-[#007BFF] w-[130px] hover:bg-[#28A745] border-none text-xl hidden lg:block">
          <strong>Hire me!</strong>
        </button>
      </div> */}
    </div>
  );
};

export default Navbar;
