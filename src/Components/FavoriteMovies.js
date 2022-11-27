import React, { Component } from 'react'

const FavoriteMovies = () => {
    let movies = this.props.movies
    return (
        <div className='flex flex-col h-full w-full' id="favorite">
        <h1 className='text-center p-5 text-indigo-400 font-bold text-3xl italic' style={{textShadow:'2px 2px 3px black'}}>Favorite Movies</h1>
        <div className='flex justify-between flex-wrap p-10'>
        {
            movies.map((item, index) => {
                return(
                    <div className="card glass basis-1/1 w-60 lg:basis-1/5 mx-2 my-4 shadow-xl text-gray-600" key={index}>
                        <figure className='h-80'><img className="object-fill h-auto w-full"src={item.image} alt={item.title}/></figure>
                        <div className="card-body">
                            <h2 className="card-title ">{item.title}</h2>
                            <p className='hidden md:inline-block'>{item.description}</p>
                            <div className="card-actions justify-end">
                            <button className="btn btn-outline btn-primary hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-800">Watch now!</button>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        </div>
      </div>
    )
  }


export default FavoriteMovies
