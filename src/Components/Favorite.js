import React, { Component } from 'react'

const Favorite = () => {
    return (
        <div className='w-32 flex item-center btn btn-outline btn-primary text-primary'>
            <label className="swap swap-flip text-9xl">
                <input type="checkbox" />   
                <div className="swap-on">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                </div>
                <div className="swap-off">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                </div>
            </label>
            <span className=''>Favorite</span>
        </div>
    )
}

export default Favorite
