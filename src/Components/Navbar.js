import React, { Component } from 'react'

class Navbar extends Component {
  render() {
    return (
        <div className="navbar bg-base-100 px-10 bg-gray-800" id="home">
                <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-8 stroke-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a href="#home" className='text-gray-200 hover:underline hover:decoration-2 hover:decoration-indigo-500'>Homepage</a></li>
                    <li><a href="#playing"  className='text-gray-200 hover:underline hover:decoration-2 hover:decoration-indigo-500'>Playing Movie</a></li>
                    <li><a href="#favorite"  className='text-gray-200 hover:underline hover:decoration-2 hover:decoration-indigo-500'>Favorite Movie</a></li>
                    </ul>
                </div>
                </div>
                <div className="navbar-center">
                <a href="#home" className="btn btn-ghost normal-case text-4xl text-gray-200" style={{textShadow:'2px 2px 3px gray'}}>Movie <span className='text-indigo-500 italic font-bold'> App</span></a>
                </div>
                <div className="navbar-end">
                <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered hidden lg:inline" />
            </div>
        </div>
      </div>
    )
  }
}

export default Navbar