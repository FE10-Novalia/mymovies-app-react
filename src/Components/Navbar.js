import React, { Component } from 'react'

const Navbar = ({ home, project,about, contact}) => {
    return (
      <div className="navbar bg-gray-100 text-purple-600 px-10 shadow-xl">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Movie <span className='text-indigo-500 font-bold'>App</span></a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li> <a className="text-black" onClick={home}>Home</a></li>
            <li> <a className="text-black" onClick={project}>Projects</a></li>
            <li> <a className="text-black" onClick={about}>About</a></li>
            <li> <a className="text-black" onClick={contact}>Contact</a></li>
          </ul>
        </div>
      </div>
    )
  }

  export default Navbar
