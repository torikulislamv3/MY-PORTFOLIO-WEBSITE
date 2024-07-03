import { Link } from "react-router-dom"

const Myrecentproject = () => {
  return (
  <div className="mt-10">
    <h1 className="text-center text-5xl font-bold text-[#007BFF] mb-10">
        MY RECENT PROJECTS
    </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:justify-evenly gap-4">
      <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src="https://i.ibb.co/Zzpk9qq/fabrichouse.png"
      alt="project" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      Fabric House !
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>This project for fabric arts textile . Anybody can create an account in this website . He / She add her febric arts and craft item . Even He or She can add her items price . Even can sell he items on this website.</p>
    <div className="card-actions justify-end">
      <a target="blank" href="https://fabric-arts-textile.web.app/">
      <button className="btn btn-outline rounded-full text-white bg-[#007BFF] w-[130px] hover:bg-[#28A745] border-none">see project</button>
      </a>
    </div>
  </div>
</div>

<div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src="https://i.ibb.co/D1ft2B6/alfadoc.png"
      alt="project" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      Shoes!
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>This is assignment related website project . Any student can create an account in the website. He / She can give and take any assignmet in the project.</p>
    <div className="card-actions justify-end">
    <a target="blank" href="https://alfa-doc.web.app/">
      <button className="btn btn-outline rounded-full text-white bg-[#007BFF] w-[130px] hover:bg-[#28A745] border-none">see project</button>
      </a>
    </div>
  </div>
</div>

<div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src="https://i.ibb.co/Wn0pStj/animalspro.png"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      Shoes!
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>This is animals related project or website . Anyone can create an account on this website . He / She can adopt any pet animals . Even He / She donate for any animal. So thats our emotion for pet animals.</p>
    <div className="card-actions justify-end">
    <a target="blank" href="https://animals-pro-fe8cd.web.app/">
      <button className="btn btn-outline rounded-full text-white bg-[#007BFF] w-[130px] hover:bg-[#28A745] border-none">see project</button>
      </a>
    </div>
  </div>
</div>
      </div>
  </div>
  )
}

export default Myrecentproject