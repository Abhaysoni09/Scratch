import { useState, useEffect } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [teachers, setTeachers] = useState([]);
  const [students, setStudents] = useState([]);
  const [projects, setProjects] = useState([]);

  const fetchData = async () => {
    try {
      const resTeachers = await axios.get("https://scratch-wyu3.onrender.com/allteachers");
      const resStudents = await axios.get("https://scratch-wyu3.onrender.com/allstudents");
      const resProjects = await axios.get("https://scratch-wyu3.onrender.com/allprojects");

      setTeachers(resTeachers.data.teachers);
      setStudents(resStudents.data);
      setProjects(resProjects.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const getTeacherStats = (teacherId) => {
    const teacherProjects = projects.filter(
      (p) => p.teacherId === teacherId
    );

    return {
      total: teacherProjects.length,
      approved: teacherProjects.filter((p) => p.status === "approved").length,
      reject: teacherProjects.filter((p) => p.status === "reject").length,
      pending: teacherProjects.filter((p) => p.status === "pending").length,
    };
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-black via-gray-900 to-blue-950 p-8 text-white">
      <h1 className="text-4xl font-bold text-center mb-10">
        Admin Dashboard
      </h1>
      <div className="flex gap-6 overflow-x-auto pb-6">

        <div className="min-w-62.5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-lg">
          <h2 className="text-lg text-gray-300">Total Teachers</h2>
          <p className="text-4xl font-bold mt-2">{teachers.length}</p>
        </div>

        <div className="min-w-62.5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-lg">
          <h2 className="text-lg text-gray-300">Total Students</h2>
          <p className="text-4xl font-bold mt-2">{students.length}</p>
        </div>

        <div className="min-w-62.5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-lg">
          <h2 className="text-lg text-gray-300">Total Projects</h2>
          <p className="text-4xl font-bold mt-2">{projects.length}</p>
        </div>

      </div>
      <h2 className="text-2xl font-semibold mt-10 mb-5">
        Teachers Performance
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {teachers.map((teacher) => {
          const stats = getTeacherStats(teacher._id);

          return (
            <div
              key={teacher._id}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-lg hover:scale-105 transition duration-300"
            >
              <h3 className="text-xl font-bold mb-2">
                {teacher.username}
              </h3>

              <p className="text-gray-300 mb-4">
                {teacher.email}
              </p>

              <div className="space-y-2 text-sm">

                <div className="flex justify-between">
                  <span>Total Projects</span>
                  <span className="font-bold">{stats.total}</span>
                </div>

                <div className="flex justify-between text-green-400">
                  <span>Approved</span>
                  <span className="font-bold">{stats.approved}</span>
                </div>

                <div className="flex justify-between text-red-400">
                  <span>Rejected</span>
                  <span className="font-bold">{stats.reject}</span>
                </div>

                <div className="flex justify-between text-amber-500">
                  <span>Pending</span>
                  <span className="font-bold">{stats.pending}</span>
                </div>
              </div>
            </div>
          );
        })}

      </div>

    </div>
  );
};

export default AdminDashboard;