/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'

export default class Carousel extends Component {
    render() {
      let { movies } = this.props
        return (
            <div className="carousel w-full h-full" id='playing'>
                {
                    movies.map((item, index) => {
                        let url = `https://image.tmdb.org/t/p/w500/${item.poster_path}`
                       return(
                        <div id={index} key={index} className="carousel-item glass relative w-full h-full">
                            <div className="hero h-full">
                                <div className="hero-content flex-col lg:flex-row">
                                    <img src={url} className="max-w-sm rounded-lg shadow-2xl" />
                                    <div>
                                    <h1 className="text-5xl font-bold text-indigo-300">Now Playing!</h1>
                                    <h1 className="text-5xl font-bold">{item.title}</h1>
                                    <p className="py-6">{item.release_date}</p>
                                    {/* <div className="rating">
                                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-indigo-500" />
                                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-indigo-500" />
                                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-indigo-500" />
                                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-indigo-500" />
                                        <input type="radio" name="rating-4" className="mask mask-star-2 bg-indigo-500" />
                                    </div> */}
                                    <p className="py-6">{item.overview}</p>
                                    <button className="btn btn-primary">Watch Now</button>
                                    </div>
                                </div>
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href={`#${index-1}`} className="btn btn-circle">❮</a> 
                                    <a href={`#${index+1}`} className="btn btn-circle">❯</a>
                                </div>
                            </div>
                        </div>
                       )
                    })
                }
        </div>
        )
    }
}
