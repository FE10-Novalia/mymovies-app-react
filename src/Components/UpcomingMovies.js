import React, { Component } from 'react'

export default class UpcomingMovies extends Component {
    render() {
      let { upcoming } = this.props
        return (
            <div className='flex flex-col h-full w-full' id="favorite">
            <h1 className='text-center p-5 text-indigo-400 font-bold text-3xl italic' style={{textShadow:'2px 2px 3px black'}}>Upcoming Movies</h1>
            <div className="divider"></div> 
            <div className='flex justify-between flex-wrap p-10'>
            {
                upcoming.map((item, index) => {
                    let url = `https://image.tmdb.org/t/p/w500${item.poster_path}`
                    return(
                        <div className="card glass basis-1/1 w-60 lg:basis-1/6 mx-2 my-4 shadow-xl text-gray-600 hover:scale-110" key={index}>
                            <figure className='h-80'><img className="object-fill h-auto w-full"src={url} alt={item.title}/></figure>
                            <div className="card-body">
                                <h2 className="card-title text-white">{item.title}</h2>
                                <p className="text-white">{item.release_date}</p>
                                <div className="card-actions justify-end">
                                <button className="btn btn-sm btn-outline btn-primary mt-5 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-800">Watch now!</button>
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
}
