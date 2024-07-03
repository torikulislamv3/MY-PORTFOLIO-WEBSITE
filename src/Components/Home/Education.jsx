import { MdOutlineCastForEducation } from "react-icons/md"


const Education = () => {
  return (
    <div id="education">
        <marquee>
        <h1 className="flex gap-7 text-5xl font-bold text-[#007BFF] mt-10 items-center">
            <MdOutlineCastForEducation className="text-6xl" />
            <p>MY EDUCATION</p>
            </h1>
        </marquee>

       <div className="mb-10">
       <div className="education-card border w-full rounded-xl text-center py-5 bg-white hover:bg-black mb-5">
            <p className="text-[#007BFF] font-semibold text-2xl">2024</p>
            <h1 className="text-green-700 font-semibold text-4xl">COMPLETE WEB DEVELOPMENT COURSE</h1>
            <a target="blank" className="text-red-400 mt-2" href="https://web.programming-hero.com/home">
           Programming_Hero
            </a>
        </div>

        <div className="education-card border w-full rounded-xl text-center py-5 bg-white hover:bg-black mb-5">
            <p className="text-[#007BFF] font-semibold text-2xl">2020</p>
            <h1 className="text-green-700 font-semibold text-4xl">Secondary School Certificate (SSC)</h1>
            <p className="text-red-400 mt-2">All-Hera Institute, Rangpur</p>
        </div>

        <div className="education-card border w-full rounded-xl text-center py-5 bg-white hover:bg-black">
            <p className="text-[#007BFF] font-semibold text-2xl">Completion Expected 2025</p>
            <h1 className="text-green-700 font-semibold text-4xl">Diploma In-Engineering(CST)</h1>
            <a target="blank" href="https://rangpur.polytech.gov.bd/" className="text-red-400 mt-2">Rangpur Polytechnic Institute</a>
        </div>
       </div>
        
    </div>
  )
}

export default Education