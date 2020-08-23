import React, { Component } from 'react'
import '../asset/codestyle.css'

export class Search extends Component {
    // searchname = (keyword) => {
    //     console.log(keyword)
    //     const url = "https://api.covid19api.com/summary?fbclid=IwAR0uoH6cU95rR1X8eiYo7iUwWz0bVGViIjc4Hx8J8o36idD48kD_VflcOyg";
    //     const response = fetch(url);
    //     const data = response.json();
    //     console.log(data.Countries);
    // }
    state = {
        loading: true,
        list: [],
    };
    async searchname(keyword) {
        const url = "https://api.covid19api.com/summary?fbclid=IwAR0uoH6cU95rR1X8eiYo7iUwWz0bVGViIjc4Hx8J8o36idD48kD_VflcOyg";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({list:data.Countries, loading: false});
    }
    render() {
        return (
            <div className="py-4">
                <input className="w-full border-solid text-xl px-4 py-4" placeholder="Search" onChange={(event) => {this.searchname(event.target.value)}}/>
            </div>
        )
    }
}

export default Search
