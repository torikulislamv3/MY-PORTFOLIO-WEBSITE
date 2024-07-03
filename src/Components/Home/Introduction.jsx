import { CiFacebook, CiLinkedin } from "react-icons/ci"
import { FaDownload, FaGithub } from "react-icons/fa"
const Introduction = () => {
  return (
    <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src="https://i.ibb.co/KXQYvPQ/portfolio-img-removebg-preview.png"
      className="max-w-sm rounded-lg shadow-2xl lg:ml-[200px]" />
    <div>
      <h1 className="text-3xl font-bold text-[#20C997]">I'm MD TORIKUL ISLAM</h1>
      <p className="py-4 text-7xl google-font text-[#28A745]">
        FRONT-END WEB
      </p>
      <p className="text-7xl google-font text-[#28A745]">
        DEVELOPER
      </p>
      <p className="mt-5">
      Front-end web developers transform ideas into interactive, 
      <br />
       visually stunning websites using HTML, CSS, and JavaScript.
      </p>
      <div className="mt-10 flex items-center gap-2">
        <button className="btn btn-outline rounded-full border-[#007BFF] text-[#007BFF] hover:bg-[#007BFF] hover:text-white">Download Resume <FaDownload /> </button>
        <button className="hover:bg-[#007BFF]"><CiLinkedin className="text-5xl border p-1 rounded-full border-[#007BFF] text-[#007BFF] hover:text-white" /></button>
        <button className="hover:bg-[#007BFF]"><FaGithub className="text-5xl border p-1 rounded-full border-[#007BFF] text-[#007BFF] hover:text-white" /></button>
        <button className="hover:bg-[#007BFF]"><CiFacebook className="text-5xl border p-1 rounded-full border-[#007BFF] text-[#007BFF] hover:text-white" /></button>
      </div>
    </div>
  </div>
</div>
  )
}

export default Introduction