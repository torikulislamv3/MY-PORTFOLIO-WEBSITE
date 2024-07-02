const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
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
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <div className="avatar online">
  <div className="w-24 rounded-full">
    <img src="https://i.ibb.co/RCtxf18/face-logo-8252748-1280.png" />
  </div>
</div>
<p className="pl-5 text-xl font-bold tracking-widest text-[#007BFF] hover:text-[#28A745]">DEVELOPER</p>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    
     <button>
     <li className="text-lg text-[#007BFF] mr-5 hover:underline">Home</li>
     </button>
     <button>
     <li className="text-lg text-[#007BFF] mr-5 hover:underline">About Me</li>
     </button>
     <button>
        <li className="text-lg text-[#007BFF] mr-5 hover:underline">Projects</li>
        </button>
     <button>
        <li className="text-lg text-[#007BFF] mr-5 hover:underline">Skills</li>
        </button>
     <button>
     <li className="text-lg text-[#007BFF] mr-5 hover:underline">Contact</li>
     </button>
    <button>
    <li className="text-lg text-[#007BFF] mr-5 hover:underline">Services</li>
    </button>
    </ul>
  </div>
  <div className="navbar-end">
    <button className="btn btn-outline rounded-full text-white bg-[#007BFF] w-[130px] hover:bg-[#28A745] border-none text-xl"><strong>Hire me!</strong></button>
  </div>
</div>
  )
}

export default Navbar