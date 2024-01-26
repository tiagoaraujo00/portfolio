import React from "react";

const ProjectCard = ({ imgUrl, title, description }) => {
  return (
    <div>
      <div
        className="relative h-52 md:h-72 rounded-t-xl group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">

        </div>
      </div>
      <div className="text-white rounded-b-xl bg-[#181818]py-6 px-4">
        <h5 className="mb-2 text-xl font-semibold">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
