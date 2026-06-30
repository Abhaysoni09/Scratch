import { useState, useEffect } from "react";
import axios from "axios";

const TeacherDashboard = () => {
  const [allprojects, setAllProjects] = useState([]);
  const [filter, setFilter] = useState("pending");

  const fetchproject = async () => {
    try {
      const res = await axios.get(
        "https://scratch-wyu3.onrender.com/submittedprojects",
        {
          withCredentials: true,
        }
      );

      setAllProjects(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchproject();
  }, []);

  // Approve
  const approveProject = async (id) => {
    try {
      await axios.patch(
        `https://scratch-wyu3.onrender.com/project/approve/${id}`,
        {},
        {
          withCredentials: true,
        }
      );

      fetchproject();
    } catch (err) {
      console.log(err);
    }
  };

  // Reject
  const rejectProject = async (id) => {
    try {
      await axios.patch(
        `https://scratch-wyu3.onrender.com/project/reject/${id}`,
        {},
        {
          withCredentials: true,
        }
      );

      fetchproject();
    } catch (err) {
      console.log(err);
    }
  };

  // Counts
  const pendingCount = allprojects.filter(
    (p) => p.status === "pending"
  ).length;

  const approvedCount = allprojects.filter(
    (p) => p.status === "approved"
  ).length;

  const rejectedCount = allprojects.filter(
    (p) => p.status === "reject"
  ).length;

  // Filtered List
  const filteredProjects = allprojects.filter(
    (p) => p.status === filter
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold text-center mb-8">
        Teacher Dashboard
      </h1>

      {/* Stats */}

      <div className="grid md:grid-cols-3 gap-6 mb-8">

        <div className="bg-yellow-400 text-white rounded-xl p-6 shadow">
          <h2 className="text-xl font-semibold">Pending</h2>
          <p className="text-4xl font-bold mt-2">{pendingCount}</p>
        </div>

        <div className="bg-green-500 text-white rounded-xl p-6 shadow">
          <h2 className="text-xl font-semibold">Approved</h2>
          <p className="text-4xl font-bold mt-2">{approvedCount}</p>
        </div>

        <div className="bg-red-500 text-white rounded-xl p-6 shadow">
          <h2 className="text-xl font-semibold">Rejected</h2>
          <p className="text-4xl font-bold mt-2">{rejectedCount}</p>
        </div>

      </div>

      {/* Filter Buttons */}

      <div className="flex justify-center gap-4 mb-10">

        <button
          onClick={() => setFilter("pending")}
          className={`px-6 py-2 rounded-lg font-semibold ${
            filter === "pending"
              ? "bg-yellow-500 text-white"
              : "bg-gray-300"
          }`}
        >
          Pending
        </button>

        <button
          onClick={() => setFilter("approved")}
          className={`px-6 py-2 rounded-lg font-semibold ${
            filter === "approved"
              ? "bg-green-600 text-white"
              : "bg-gray-300"
          }`}
        >
          Approved
        </button>

        <button
          onClick={() => setFilter("reject")}
          className={`px-6 py-2 rounded-lg font-semibold ${
            filter === "reject"
              ? "bg-red-600 text-white"
              : "bg-gray-300"
          }`}
        >
          Rejected
        </button>

      </div>

      {/* Cards */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <div
              key={project._id}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition"
            >
              <h2 className="text-2xl font-bold mb-3">
                {project.title}
              </h2>

              <p className="text-gray-600 mb-4">
                {project.description}
              </p>

              <span
                className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  project.status === "pending"
                    ? "bg-yellow-100 text-yellow-700"
                    : project.status === "approved"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {project.status}
              </span>

              {project.status === "pending" && (
                <div className="flex gap-3 mt-5">
                  <button
                    onClick={() => approveProject(project._id)}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg"
                  >
                    Approve
                  </button>

                  <button
                    onClick={() => rejectProject(project._id)}
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg"
                  >
                    Reject
                  </button>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="col-span-3 text-center text-gray-500 text-xl">
            No {filter} projects found.
          </div>
        )}

      </div>

    </div>
  );
};

export default TeacherDashboard;