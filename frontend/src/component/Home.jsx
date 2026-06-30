
const Home = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-black to-gray-500 px-6 py-10">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Student Project Submission Portal
        </h1>

        <p className="mt-4 text-gray-600">
          Submit your projects, track status, and get teacher approval or rejection in one place.
        </p>
      </div>
      <div className="max-w-6xl mx-auto mt-12 grid gap-6 md:grid-cols-3">

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
          <h3 className="text-lg font-semibold text-gray-800">Submit Project</h3>
          <p className="mt-2 text-gray-600 text-sm">
            Upload your project details, description, and files easily.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
          <h3 className="text-lg font-semibold text-gray-800">Teacher Review</h3>
          <p className="mt-2 text-gray-600 text-sm">
            Teachers can review and approve or reject submissions.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
          <h3 className="text-lg font-semibold text-gray-800">Track Status</h3>
          <p className="mt-2 text-gray-600 text-sm">
            Check real-time status: pending, approved, or rejected.
          </p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto mt-16 bg-white shadow-lg rounded-2xl p-8">

        <h2 className="text-2xl font-bold text-center text-blue-600">
          About the Portal
        </h2>

        <p className="mt-3 text-center text-gray-600">
          A smart and efficient platform designed to simplify project submissions
          for students and faculty.
        </p>

        <div className="mt-8 space-y-6 text-gray-700">

          <div>
            <h3 className="font-semibold">🎯 Our Purpose</h3>
            <p className="text-sm text-gray-600">
              Reduce paperwork and make project submission simple and digital.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">⚙️ Key Features</h3>
            <ul className="list-disc pl-5 text-sm text-gray-600">
              <li>File upload (PDF, DOCX, PPT, ZIP)</li>
              <li>Deadline reminders</li>
              <li>Status tracking</li>
              <li>Teacher feedback</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">👩‍🎓 For Students</h3>
            <p className="text-sm text-gray-600">
              Upload and track projects easily with real-time updates.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">👨‍🏫 For Faculty</h3>
            <p className="text-sm text-gray-600">
              Review, approve, and manage student submissions efficiently.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">📌 Our Vision</h3>
            <p className="text-sm text-gray-600">
              Build a paperless academic system for better collaboration.
            </p>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Student Project Submission Portal
        </p>
      </div>

    </div>
  );
};

export default Home;