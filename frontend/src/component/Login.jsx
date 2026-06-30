import image from '../assets/Abstrakte Blaue Wellen Poster.jpeg'
import { useState } from 'react'
import axios from 'axios'
import {useNavigate} from "react-router-dom"

const Login = () => {
  const Nevigate = useNavigate()
  const [identity, setidentity] = useState("")
  const [password, setpassword] = useState("")

  const handlesubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post("https://scratch-wyu3.onrender.com/api/auth/login", {
        identity,
        password
      }, { withCredentials: true })

      alert("Login Successfully")
      Nevigate("/Dashboard")
    } catch (error) {
      console.log(error)
      alert(error.response.data.message)
    }
  }

  return (
    <div className='min-h-screen bg-gradient-to-b from-black via-gray-800 to-blue-950 flex justify-center items-center p-4'>
      <div className='w-full max-w-4xl h-auto md:h-[550px] flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden shadow-lg'>
        <div
          className='flex flex-col justify-center items-center bg-cover bg-center p-6 md:flex-1 min-h-[250px] md:min-h-full'
          style={{ backgroundImage: `url(${image})` }}
        >
          <h2 className='text-white font-bold text-3xl md:text-5xl text-center'>
            Welcome Back
          </h2>
          <h5 className='text-white text-lg md:text-2xl text-center mt-2'>
            Share your Projects <br /> and Get your Results
          </h5>
        </div>
        <form
          className='flex flex-col gap-4 p-6 md:flex-1 justify-center'
          onSubmit={handlesubmit}
        >
          <h1 className='font-bold text-center text-3xl md:text-4xl'>
            Login
          </h1>

          <label className='font-bold text-xl md:text-2xl'>
            Username/Email
          </label>
          <input
            type="text"
            value={identity}
            onChange={(e) => setidentity(e.target.value)}
            className='border-2 w-full md:w-2/3 rounded-2xl p-3 hover:bg-gray-200'
            placeholder='Enter Username/Email'
          />

          <label className='font-bold text-xl md:text-2xl'>
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            className='border-2 w-full md:w-2/3 rounded-2xl p-3 hover:bg-gray-200'
            placeholder='Enter Password'
          />

          <div className='text-center mt-2'>
            <button className='px-6 py-3 bg-blue-600 rounded-2xl text-xl md:text-2xl font-bold hover:bg-blue-700 text-white'>
              Login
            </button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default Login