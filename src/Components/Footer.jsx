const Footer = () => {
  return (
    <footer data-aos="fade-up" className="bg-[#007BFF] pt-10 pb-7">
        <div>
        <img className="w-24 rounded-full mx-auto" src="https://i.ibb.co/RCtxf18/face-logo-8252748-1280.png" alt="developer" />
        </div>
        <p className="text-center tracking-widest font-bold text-xl text-white">DEVELOPER</p>
        <div className="text-center mt-4">
        <ul className="menu menu-horizontal px-1">
    
    <button>
    <li className="text-lg text-white mr-5 font-bold hover:underline">Home</li>
    </button>
    <button>
    <li className="text-lg text-white mr-5 font-bold hover:underline">About Me</li>
    </button>
    <button>
       <li className="text-lg text-white mr-5 font-bold hover:underline">Projects</li>
       </button>
    <button>
       <li className="text-lg text-white mr-5 font-bold hover:underline">Skills</li>
       </button>
    <button>
    <li className="text-lg text-white mr-5 font-bold hover:underline">Contact</li>
    </button>
   <button>
   <li className="text-lg text-white mr-5 font-bold hover:underline">Services</li>
   </button>
   </ul>
        </div>
        <div className="text-center mt-5">
        <p className="text-gray-300">Copyright © ${new Date().getFullYear()} - All right reserved</p>
        </div>
    </footer>
  )
}

export default Footer