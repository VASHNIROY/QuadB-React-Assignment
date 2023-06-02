import { Component } from "react"
import {withRouter} from 'react-router-dom'

import Header from "../Header"
import EachMovie from "../EachMovie"


import './index.css'

class Home extends Component{
    state = {movieData: []}

    componentDidMount(){
        this.getData()
    }
    getData = async() => {
        const apiUrl = 'https://api.tvmaze.com/search/shows?q=all'
        const options = {
            method: 'GET'
        }
        
        const response = await fetch(apiUrl,options)
        if (response.ok){
            const data = await response.json()
            const updatedData = data.map(eachOne => (
                {title: eachOne.show.name,
                rating: eachOne.show.rating,
                genres: eachOne.show.genres,
                id: eachOne.show.id,
                poster: eachOne.show.image}
            ))

            this.setState({movieData: updatedData})
        }
    }

    renderSuccessData = () => {
        const {movieData} = this.state
        return(
            <ul className="movie-items-un-ordered-list ">
                {movieData.map(eachOne => (
                    <EachMovie key={eachOne.id} movieDetails= {eachOne} />
                ))}
            </ul>
        )
    }

    render(){
        return(
            <>
            <div className="main-container">
                <Header />
                {this.renderSuccessData()}
            </div>
            </>
        )   
    }
}

export default withRouter(Home)