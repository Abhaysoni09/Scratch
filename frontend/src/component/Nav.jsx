import {useNavigate} from "react-router-dom"
import Home from "./Home"
const Nav = () => {
  const navigate = useNavigate()
  const login=()=>{
    navigate("/login")
  }
  const register=()=>{
    navigate("/register")
  }
  return (
    <>
    <nav className='bg-black h-[10vh] flex justify-between items-center'>
        <div><h1 className='text-white font-bold p-2 hover:to-blue-400 text-5xl uppercase'>scratch</h1></div>
        <div className="flex">
            <a href="" className='text-white uppercase pr-5 text-lg hover:text-blue-400'>home</a>
            <a href="" className='text-white uppercase pr-5 text-lg hover:text-blue-400'>projects</a>
            <a href="" className='text-white uppercase pr-5 text-lg hover:text-blue-400'>teachers</a>
            <a href="" className='text-white uppercase pr-5 text-lg hover:text-blue-400'>about</a>
            <div className='text-white uppercase pr-5 text-lg flex gap-2 justify-center items-center hover:text-blue-400'>
              <button onClick={login} className='text-white uppercase pr-2 text-lg bg-blue-600 p-2 rounded-2xl hover:text-blue-400'>login</button>
            <button onClick={register} className='text-white uppercase pr-2 text-lg bg-blue-600 p-2 rounded-2xl hover:text-blue-400'>register</button>
            </div>
        </div>
    </nav>
    <Home/>
    </>
  )
}

export default Nav