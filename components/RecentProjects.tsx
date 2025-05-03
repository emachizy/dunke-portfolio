import { projects } from "@/data";
import React from "react";

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        A list of my <span className="text-purple-500">Recent Experiences</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map(({ id, title, des, iconLists, Link }) => (
          <div key={id}>{title}</div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
