import { useState, useEffect } from "react";
import axios from "axios";

const Project = () => {
  const [allprojects, setallprojects] = useState([]);

  const fetchprojects = async () => {
    try {
      const res = await axios.get(
        "https://scratch-wyu3.onrender.com/createdprojects",
        { withCredentials: true }
      );

      setallprojects(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchprojects();
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-950 via-blue-900 to-blue-950">
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold text-white">
          Your Projects
        </h1>
        <p className="text-gray-300 mt-2">
          Track all your submitted projects and their status
        </p>
      </div>
      <div className="px-6 pb-10">
        {allprojects.length === 0 ? (
          <div className="text-center text-white text-xl mt-10">
            No projects found
          </div>
        ) : (
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allprojects.map((project) => (
              <div
                key={project._id}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 shadow-lg hover:scale-105 transition duration-300"
              >
                <h2 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="text-sm text-gray-300 mb-3">
                  Teacher:{" "}
                  <span className="font-semibold text-white">
                    {project.teacherId?.username}
                  </span>
                </div>
                <div
                  className={`inline-block px-4 py-1 rounded-full text-sm font-semibold ${
                    project.status === "pending"
                      ? "bg-yellow-500 text-black"
                      : project.status === "approved"
                      ? "bg-green-500 text-white"
                      : "bg-red-500 text-white"
                  }`}
                >
                  {project.status}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;