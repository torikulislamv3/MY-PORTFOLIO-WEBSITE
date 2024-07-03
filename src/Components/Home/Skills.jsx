import { FaCss3Alt, FaNode, FaReact } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io"
import { IoLogoFigma, IoLogoFirebase } from "react-icons/io5"
import { RiTailwindCssFill } from "react-icons/ri"
import { SiExpress, SiHtml5, SiMongodb } from "react-icons/si"

const Skills = () => {
  return (
    <div>
        <h1 className="text-center text-5xl font-bold text-[#007BFF] mt-10">MY SKILLS</h1>
        <p className="text-center mt-4">
        Passionate front-end developer skilled in creating responsive and interactive web applications. Dedicated to building user-friendly and visually appealing interfaces.
        </p>
        <div className="skill-icons mt-5 mb-10 grid gap-5 grid-cols-2 sm:grid-cols-4 lg:grid-cols-6">
                <div className="card-skill border rounded-2xl size-[160px] bg-gray-400 hover:bg-[#007BFF] hover:text-red-600">
                <SiHtml5 className="text-6xl mx-auto mt-11 " />
                <p className="text-center mt-1 font-bold text-2xl text-white ">HTML</p>
                </div>

                <div className="card-skill border rounded-2xl size-[160px] bg-gray-400 hover:bg-[#007BFF] hover:text-green-600">
                <FaCss3Alt className="text-6xl mx-auto mt-11" />
               
                <p className="text-center mt-1 font-bold text-2xl text-white">CSS</p>
                </div>

                <div className="card-skill border rounded-2xl size-[160px] bg-gray-400 hover:bg-[#007BFF] hover:text-green-600">
                <RiTailwindCssFill className="text-6xl mx-auto mt-11" />
                
                <p className="text-center mt-1 font-bold text-2xl text-white">TAILWIND</p>
                </div>

                <div className="card-skill border rounded-2xl size-[160px] bg-gray-400 hover:bg-yellow-300 hover:text-black">
                <IoLogoJavascript className="text-6xl mx-auto mt-11" />
                <p className="text-center mt-1 font-bold text-2xl text-white">JavaScript</p>
                </div>

                <div className="card-skill border rounded-2xl size-[160px] bg-gray-400 hover:bg-black hover:text-green-600">
                <FaReact className="text-6xl mx-auto mt-11" />
                <p className="text-center mt-1 font-bold text-2xl text-white">React.js</p>
                </div>

                <div className="card-skill border rounded-2xl size-[160px] bg-gray-400 hover:bg-black hover:text-green-600">
                <FaNode className="text-6xl mx-auto mt-11" />
                <p className="text-center mt-1 font-bold text-2xl text-white">NODE.JS</p>
                </div>

                <div className="card-skill border rounded-2xl size-[160px] bg-gray-400 hover:bg-black hover:text-green-600">
                <SiMongodb className="text-6xl mx-auto mt-11" />
                <p className="text-center mt-1 font-bold text-2xl text-white">mondoDB</p>
                </div>

                <div className="card-skill border rounded-2xl size-[160px] bg-gray-400 hover:bg-[#007BFF]">
                <SiExpress className="text-6xl mx-auto mt-11" />
                <p className="text-center mt-1 font-bold text-2xl text-white">Express js</p>
                </div>

                <div className="card-skill border rounded-2xl size-[160px] bg-gray-400 hover:bg-[#007BFF] hover:text-yellow-400">
                <IoLogoFirebase className="text-6xl mx-auto mt-11" />
                <p className="text-center mt-1 font-bold text-2xl text-white">Firebase</p>
                </div>

                <div className="card-skill border rounded-2xl size-[160px] bg-gray-400 hover:bg-[#007BFF] hover:text-lime-400">
                <IoLogoFigma className="text-6xl mx-auto mt-11" />
                <p className="text-center mt-1 font-bold text-2xl text-white">Figma</p>
                </div>
        </div>
    </div>
  )
}

export default Skills