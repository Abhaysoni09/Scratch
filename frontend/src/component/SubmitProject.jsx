import { useState, useEffect } from "react";
import axios from "axios";

const SubmitProject = () => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [allteacher, setAllTeacher] = useState([]);
  const [teacherId, setTeacherId] = useState("");

  const fetchteachers = async () => {
    try {
      const res = await axios.get(
        "https://scratch-wyu3.onrender.com/api/allteachers"
      );
      setAllTeacher(res.data.teachers);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchteachers();
  }, []);

  const handlesubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !image || !teacherId) {
      alert("All fields required");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("title", title);
      formData.append("description", description);
      formData.append("teacherId", teacherId);

      await axios.post(
        "https://scratch-wyu3.onrender.com/api/project",
        formData,
        { withCredentials: true }
      );

      alert("Project Created Successfully");
      setTitle("");
      setDescription("");
      setImage(null);
      setTeacherId("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-blue-950 p-6">

      <div className="w-full max-w-2xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-8">

        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Submit Your Project
        </h2>

        <form onSubmit={handlesubmit} className="space-y-5">
          <div>
            <label className="text-sm text-gray-300 mb-2 block">
              Project Image
            </label>
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              className="w-full text-white bg-white/10 border border-white/20 rounded-lg p-2 cursor-pointer"
            />
          </div>
          <div>
            <label className="text-sm text-gray-300 mb-2 block">
              Project Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter project title"
              className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="text-sm text-gray-300 mb-2 block">
              Description
            </label>
            <textarea
              rows="5"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Write project description..."
              className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="text-sm text-gray-300 mb-2 block">
              Select Teacher
            </label>

            <select
              value={teacherId}
              onChange={(e) => setTeacherId(e.target.value)}
              className="w-full bg-white/10 border border-white/20 text-white rounded-lg p-3 focus:outline-none"
            >
              <option value="" className="text-black">
                Select Teacher
              </option>

              {allteacher.map((teacher) => (
                <option
                  key={teacher._id}
                  value={teacher._id}
                  className="text-black"
                >
                  {teacher.username}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-lg"
          >
            Submit Project
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubmitProject;