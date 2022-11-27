import React from 'react'
import Navbar from '../Components/Navbar'
import { useNavigate } from 'react-router-dom'
import withRouter from '../withRouter'

const About = () => {
  const navigate = useNavigate()
  return (
    <div className='bg-white w-full h-screen'>
       <Navbar
           home={() => navigate("/")}
           project={() => navigate("/project")}
           about={() => navigate("/about")}
           contact={() => navigate("/contact")}
        />

      <div className=' w-full flex justify-center p-10 items-center'>
        <div className="card card-side bg-base-100 shadow-xl max-h-[500px] max-w-[500px]">
          <div className="card-body bg-white text-gray-800">
            <h2 className="card-title">About MyMovie App</h2>
            <p>This App was build built for assignment from bootcamp for <span className='text-primary font-bold'>Reactjs</span> implementation and fetching Api with <span className='text-primary font-bold'>Axios</span>. And also to learn to apply the css framework in the project, namely <span className='text-primary font-bold'>Tailwindcss</span> with the <span className='text-primary font-bold'>Daisyui plugin</span>. The data is taken from the Public API, namely the <span className='text-primary font-bold'>Moviedb API</span></p>
            <div className="card-actions justify-end">
              <button 
                onClick={() => navigate('/contact')}
                className="btn btn-primary">Contact Me</button>
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}

export default About