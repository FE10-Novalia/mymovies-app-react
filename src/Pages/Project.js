import React from 'react'
import Navbar from '../Components/Navbar'
import { useNavigate } from 'react-router-dom'
import withRouter from '../withRouter'
import Footer from '../Components/Footer'

const Project = () => {
  const navigate = useNavigate()
  return (
    <div className='bg-white dark:bg-gray-700 w-full h-screen flex flex-col'>
        <Navbar
           home={() => navigate("/")}
           project={() => navigate("/project")}
           about={() => navigate("/about")}
           contact={() => navigate("/contact")}
        />
        <div className='w-full h-full'>

        </div>
        <Footer/>
      </div>
  )
}

export default Project
