import React,{ useState } from 'react'
import Navbar from '../Components/Navbar'
import { useNavigate} from 'react-router-dom'
import { useCookies } from "react-cookie";
import Footer from '../Components/Footer'

const Contact = () => {
  const navigate = useNavigate()
  // const [cookies, setCookie] = useCookies('');

  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('')
  // const [message, setMessage] = useState('')

  // const onSubmit = (e) =>{
  //   console.log(name)
  //   console.log(email)
  //   console.log(message)
  // }
  return (
    <div className='bg-white dark:bg-gray-700 w-full h-screen flex flex-col'>
       <Navbar
           home={() => navigate("/")}
           project={() => navigate("/project")}
           about={() => navigate("/about")}
           contact={() => navigate("/contact")}
        />
      <div className='h-full grid place-items-center'>
        <div className='card shadow-lg bg-indigo-400 p-2 md:p-10 w-[80vw] md:w-[40vw] grid place-items-center my-3'>
          <input type="text" placeholder="Your fullname" className="input input-bordered input-primary w-full max-w-xs bg-white"/>
          <input type="text" placeholder="Your Email" className="input input-bordered input-primary w-full max-w-xs bg-white my-3"/>
          <textarea placeholder="Your Message" className="input input-bordered input-primary w-full max-w-xs bg-white resize-none h-56"/>
          <button className="btn btn-outline btn-primary my-3 w-48">Send Message</button>
        </div>
      </div>
      <Footer/>
    </div>
  )
}


export default Contact
