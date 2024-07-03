const Myrecentproject = () => {
  return (
  <div className="mt-10">
    <h1 className="text-center text-5xl font-bold text-[#007BFF] mb-10">
        MY RECENT PROJECTS
    </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:justify-evenly gap-4">
      <div className="card bg-green-400 text-gray-950 w-96 shadow-xl ">
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
    <div className="card-actions flex justify-between items-center">
      <div>
        <p className="font-semibold text-white underline">
          Used Technology 
        </p>
        <p className="text-red-700 font-bold">
          react.js, tailwind-css, <br /> html-5, node.js, <br /> express.js, mongodb, <br /> firebase, css
        </p>
      </div>
      <a target="blank" href="https://github.com/torikulislamv3/Fabric-House-Client">
      <button className="btn btn-outline rounded-full text-white bg-[#007BFF] w-[130px] hover:bg-[#28A745] border-none">see project</button>
      </a>
    </div>
  </div>
</div>

<div className="card w-96 shadow-xl bg-green-400">
  <figure>
    <img
      src="https://i.ibb.co/D1ft2B6/alfadoc.png"
      alt="project" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      Alfa Doc !
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>This is assignment related website project . Any student can create an account in the website. He / She can give and take any assignmet in the project.</p>
    <div className="card-actions flex justify-between items-center">
    <div>
        <p className="font-semibold text-white underline">
          Used Technology 
        </p>
        <p className="text-red-700 font-bold">
          react.js, tailwind-css, <br /> html-5, node.js, <br /> express.js, mongodb, <br /> firebase, css
        </p>
      </div>
    <a target="blank" href="https://github.com/torikulislamv3/Alfa-Doc-Client">
      <button className="btn btn-outline rounded-full text-white bg-[#007BFF] w-[130px] hover:bg-[#28A745] border-none">see project</button>
      </a>
    </div>
  </div>
</div>

<div className="card bg-green-400 text-gray-950  w-96 shadow-xl">
  <figure>
    <img
      src="https://i.ibb.co/Wn0pStj/animalspro.png"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      Animals Pro !
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>This is animals related project or website . Anyone can create an account on this website . He / She can adopt any pet animals . Even He / She donate for any animal. So thats our emotion for pet animals.</p>
    <div className="card-actions flex justify-between items-center">
    <div>
        <p className="font-semibold text-white underline">
          Used Technology 
        </p>
        <p className="text-red-700 font-bold">
          react.js, tailwind-css, <br /> html-5, node.js, <br /> express.js, mongodb, <br /> firebase, css
        </p>
      </div>
    <a target="blank" href="https://github.com/torikulislamv3/Animal-Pro_client">
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