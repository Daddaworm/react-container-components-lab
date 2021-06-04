import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {

    state = {
        reviews: [],
        searchTerm: ""
    }

    // componentWillMount() {
    //     fetch(URL)
    //     .then(resp => resp.json())
    //     .then(data => {
    //         console.log(data)
    //         this.setState({
    //         reviews: data,
    //         searchTerm: data
    //         })
    //     })
    // }      

    handleSearch = (e) => {
        // console.log(e.target.value)
        this.setState({
            searchTerm: e.target.value
        })
    }


    handleSubmit = (e) => {
        e.preventDefault()
        fetch(`${URL}${this.state.searchTerm}`)
        .then(resp => resp.json())
        .then(data => 
        this.setState({reviews: data.results}))
        
    }

    render() {
        return(
            <div className={`searchable-movie-reviews`} >
                
                <form onSubmit={this.handleSubmit}>
                    <input 
                        onChange={this.handleSearch}
                        className={this.state.searchTerm} 
                        type="text"
                        />
                    <button>Search</button>
                </form>
                {}
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }


}