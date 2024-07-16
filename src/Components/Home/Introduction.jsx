import { CiFacebook, CiLinkedin } from "react-icons/ci"
import { FaDownload, FaGithub } from "react-icons/fa"
import resume from '../../assets/resume.pdf'
const Introduction = () => {
  return (
    <div data-aos="fade-down" data-aos-duration="1000" id="introduction" className="hero min-h-screen bg-gray-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
    data-aos="fade-left"
      src="https://i.ibb.co/KXQYvPQ/portfolio-img-removebg-preview.png"
      className="max-w-sm rounded-lg shadow-2xl lg:ml-[200px]" />
    <div data-aos="fade-right">
      <h1 className="text-3xl font-bold text-[#20C997]">I'm MD TORIKUL ISLAM</h1>
      <p className="py-4 text-7xl google-font text-[#28A745]">
        FRONT-END WEB
      </p>
      <p className="text-7xl google-font text-[#28A745]">
        DEVELOPER
      </p>
      <p className="mt-5">
      Hello! I'm MD TORIKUL ISLAM, a dedicated front-end web developer. I love creating responsive and interactive websites and am always eager to learn new technologies. My goal is to work on complex and creative projects to further enhance my skills. Let's connect and build amazing projects together! 
      </p>
      <div className="mt-10 flex items-center gap-2">
        <button className="btn btn-outline rounded-full border-[#007BFF] text-[#007BFF] hover:bg-[#007BFF] hover:text-white"> <a
        download="resume" 
        className="flex items-center gap-2" href={resume}>
        Download Resume <FaDownload/>
          </a> </button>
       <a href="#">
       <button target="blank" className="hover:bg-[#007BFF]"><CiLinkedin className="text-5xl border p-1 rounded-full border-[#007BFF] text-[#007BFF] hover:text-white" /></button>
       </a>
        <a target="blank" href="https://github.com/torikulislamv3">
        <button className="hover:bg-[#007BFF]"><FaGithub className="text-5xl border p-1 rounded-full border-[#007BFF] text-[#007BFF] hover:text-white" /></button>
        </a>
        <a target="blank" href="https://www.facebook.com/mdtorikulislamtamim/">
        <button className="hover:bg-[#007BFF]"><CiFacebook className="text-5xl border p-1 rounded-full border-[#007BFF] text-[#007BFF] hover:text-white" /></button>
        </a>
      </div>
    </div>
  </div>
</div>
  )
}

export default Introduction