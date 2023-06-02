import { Component } from "react";
import { withRouter } from "react-router-dom";
import Header from '../Header'
import './index.css'


class MovieDetails extends Component{
    state = {movieData: []}
    componentDidMount(){
        this.getMovieDetails()
    }

    getMovieDetails = async() => {
        const {match} =this.props
        const {params} = match
        const {id} = params
        const url = `https://api.tvmaze.com/shows/${id}`
        const options = {
            method: 'GET',
        }
        const responseData = await fetch(url,options)
        const jsonData = await responseData.json()
        console.log(jsonData)

        const getFormattedData = (data) => ({
            title: data.name,
            genres: data.genres,
            poster: data.image.original,
            id: data.id,
            runtime: data.runtime,
            status: data.status,
            story: data.summary,
            type: data.type,
            language: data.language,
            country: data.network.country.name
        })

        const updatedData = getFormattedData(jsonData)
        console.log(updatedData)

        this.setState({movieData: updatedData})
    }

    render(){
        const {movieData} = this.state
        const {poster,title,genres,story,status,language,runtime,type,country} = movieData
        console.log(genres)
        return(
            <div className="page-container">
                <Header />
                <div className="movie-page-main-container">
                    <img alt="movieimage" className="movie-poster" src={poster} />
                    <div className="movie-title-container">
                        <h1>{title}</h1>
                        <div className="book-genre-container">
                            <p className="story-description">{genres}</p>
                            <button className="book-btn">Book Now</button>
                        </div>
                        <h1 className="side-headings">STORY:</h1>
                            <p className="story-description">{story}</p>
                        <div className="details-main-container">
                            <h1 className="side-headings">
                                DETAILS:
                            </h1>
                            <div className="details-container">
                                <p className="story-description">Status :</p>
                                <p className="story-description">{status}</p>
                            </div>
                            <div className="details-container">
                                <p className="story-description">Spoken Language :</p>
                                <p className="story-description">{language}</p> 
                            </div>
                            
                            <div className="details-container">
                                <p className="story-description">Runtime :</p>
                                <p className="story-description">{runtime}</p>
                            </div>
                            <div className="details-container">
                                <p className="story-description">Country :</p>
                                <p className="story-description">{country}</p>
                            </div>
                            <div className="details-container">
                                <p className="story-description">Type :</p>
                                <p className="story-description">{type}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default withRouter(MovieDetails)