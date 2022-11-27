import api from '../Services/api';
import Navbar from '../Components/Navbar';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DetailCard from '../Components/DetailCard';
import UpcomingMovies from '../Components/UpcomingMovies';
import DetailInfo from '../Components/DetailInfo';

const Detail = () => {
    const [movieDetail,setMovieDetail] = useState()
    const [reviews,setReviews] = useState()
    const [upcomingMovies,setUpcomingMovies] = useState()
    const [videoUrl,setVideoUrl] = useState()
    const [showTrailer,setShowTrailer] = useState('hidden')
    const navigate = useNavigate(), location = useLocation()


    const getVideo = async(id) =>{
      let url = ''
      await api.getVideo(id)
        .then(response =>{
          setMovieDetail(response.data)
          let allVideos = response.data.videos.results
          allVideos.map(item => {
            if(item.name === 'Official Teaser'){
              url = item.key
            }else if(item.name === 'Official Teaser'){
              url = item.key
            }else{
              url = allVideos[0].key
            }
          })
        })
        .catch(err => console.log(err))

        // this.setState({
        //   videoUrl : `https://www.youtube.com/embed/${url}`
        // })
        setVideoUrl(`https://www.youtube.com/embed/${url}`)
    }

    const getReviews = async(id) => {
      try {
        let result = await api.getReview(id)
        // this.setState({
        //  reviews : result.data.results
        // })
        setReviews(result.data.results)
        // console.log(result.data.results)
      } catch (error) {
        console.error(error)
      }
    }
    const getUpcomingMovies = async() =>{
      try {
        let result = await api.upcomingMovies('upcoming')
        // this.setState({
        //  upcomingMovies : result.data.results
        // })
        setUpcomingMovies(result.data.results)
      } catch (error) {
        console.error(error)
      }
    }
    const seeTrailer = () =>{
      // this.setState({
      //   showTrailer : 'block z-10'
      // })
      setShowTrailer('block z-10')
    }
    const hiddenTrailer = () =>{
      // this.setState({
      //   showTrailer : 'hidden'
      // })
      setShowTrailer('hidden')
    }
    useEffect(()=>{
        getVideo(location?.state?.id)
        getReviews(location?.state?.id)
        getUpcomingMovies()
    },[])


    return (
      <div>
        <Navbar
           home={() => navigate("/")}
           project={() => navigate("/project")}
           about={() => navigate("/about")}
           contact={() => navigate("/contact")}
        />
          {
            movieDetail ?
            <>
              <div className={`w-full h-full flex justify-center bg-indigo-300 shadow-xl relative p-5`}>
                <DetailCard movie={movieDetail} handleClick={() => seeTrailer()}/>
                <div 
                  className={`absolute w-full h-full glass ${showTrailer} flex justify-center items-center`}>
                  <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2"
                    onClick={() => hiddenTrailer()}>✕</label>
                  <iframe src={videoUrl} className={`w-[60vw] h-[70vh] border border-3xl border-indigo-800 shadow-xl`}
                    scrolling="no" autoPlay
                    allow="autoplay; fullscreen;encrypted-media;"
                  ></iframe>
                </div>
              </div>
              <DetailInfo movie={movieDetail}/>
            </>
            : <p className='text-black'>Masih loading nih guys...</p>
          }
        {/* <Reviews review={reviews}/> */}
        {
          upcomingMovies &&
          <UpcomingMovies upcoming={upcomingMovies}
            detailClick={(movie_id) => {
              navigate(('/detail'),{
              state : {
                  id : movie_id
                }
            } )
            // window.location.reload(false)
            getVideo(movie_id)
          }}
          />
        }
      </div>
    )
  }

export default Detail
