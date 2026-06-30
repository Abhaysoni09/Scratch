import { useState, useEffect } from 'react'
import axios from 'axios'
import image from '../assets/Abstrakte Blaue Wellen Poster.jpeg'
import { useNavigate } from "react-router-dom"

const Register = () => {
  const [username, setusername] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [role, setrole] = useState("student")
  const [message, setMessage] = useState("")
  const Nevigate = useNavigate()

  const submithandle = async (e) => {
    e.preventDefault()
    try {
      await axios.post("http://localhost:3000/api/auth/register", {
        username,
        email,
        password,
        role
      })
      alert("Registration Successfully")
      Nevigate("/Dashboard")
    } catch (err) {
      console.log(err)
      alert("Registration Failed")
    }
  }

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/api/auth/search?username=${username}`
        )

        setMessage(res.data.message)
        console.log(res.data.message)

      } catch (err) {
        setMessage(err.response.data.message)
        console.log(err.response.data.message)
      }
    }

    if (username.trim()) {
      fetchUser()
    } else {
      setMessage("")
    }
  }, [username])

  return (
    <div className='min-h-screen bg-linear-to-b from-black via-gray-800 to-blue-950 flex justify-center items-center p-4'>
      <div className='w-full max-w-5xl flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden shadow-lg'>
        <div
          className='flex flex-col justify-center items-center bg-cover bg-center p-6 md:flex-1 min-h-[250px] md:min-h-full'
          style={{ backgroundImage: `url(${image})` }}
        >
          <h2 className='text-white font-bold text-3xl md:text-5xl text-center'>
            Create your <br /> Account
          </h2>
          <h5 className='text-white text-lg md:text-2xl text-center mt-2'>
            Share your Projects <br /> and Get your Results
          </h5>
        </div>
        <form
          className='flex flex-col gap-3 p-6 md:flex-1 justify-center'
          onSubmit={submithandle}
        >
          <h1 className='font-bold text-center text-3xl md:text-4xl mb-2'>
            Register
          </h1>

          <label className='font-bold text-xl md:text-2xl'>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setusername(e.target.value)}
            className='border-2 w-full md:w-2/3 rounded-2xl p-3 hover:bg-gray-200'
            placeholder='Enter Username'
          />

          {message && (
            <p className='text-green-600 text-sm md:text-lg font-bold pl-1'>
              {message}
            </p>
          )}

          <label className='font-bold text-xl md:text-2xl'>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            className='border-2 w-full md:w-2/3 rounded-2xl p-3 hover:bg-gray-200'
            placeholder='Enter Email'
          />

          <label className='font-bold text-xl md:text-2xl'>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            className='border-2 w-full md:w-2/3 rounded-2xl p-3 hover:bg-gray-200'
            placeholder='Enter Password'
          />

          <label className='font-bold text-xl md:text-2xl'>Role</label>
          <select
            value={role}
            onChange={(e) => setrole(e.target.value)}
            className='p-3 w-full md:w-2/3 border-2 hover:bg-gray-200 rounded-2xl'
          >
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="admin">Admin</option>
          </select>

          <div className='text-center mt-2'>
            <button className='px-6 py-3 bg-blue-600 rounded-2xl text-xl md:text-2xl font-bold hover:bg-blue-700 text-white'>
              Register
            </button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default Register