import React from 'react'
import Navbar from '../Components/Navbar'
import { useNavigate } from 'react-router-dom'
import withRouter from '../withRouter'

const Project = () => {
  const navigate = useNavigate()
  return (
    <div>
        <Navbar
           home={() => navigate("/")}
           project={() => navigate("/project")}
           about={() => navigate("/about")}
           contact={() => navigate("/contact")}
        />
        Project</div>
  )
}

export default Project
