import axios from 'axios'

const instance = axios.create({
    baseURL : `https://api.themoviedb.org/3/movie/`
})

// eslint-disable-next-line import/no-anonymous-default-export
export default{
    nowPlaying:(keyword) =>
    instance({
        method : `GET`,
        url : `${keyword}?api_key=1f9c774f5dc32a434e4a1f092839fff0&language=en-US`
    }),
    upcomingMovies:(keyword) =>
    instance({
        method : `GET`,
        url : `${keyword}?api_key=1f9c774f5dc32a434e4a1f092839fff0&language=en-US`
    })
}