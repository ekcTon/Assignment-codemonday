import React, { Component } from 'react'
import '../asset/codestyle.css'
import Axios from 'axios'

export class Search extends Component {
    constructor(props){
        super(props)
        this.state = {rows: [] }
    }
    searchname = (keyword) => {
        console.log(keyword)
        var dataArray = []
        Axios.get("https://api.covid19api.com/summary?fbclid=IwAR0uoH6cU95rR1X8eiYo7iUwWz0bVGViIjc4Hx8J8o36idD48kD_VflcOyg" + keyword).then(result=>{
            // console.log(JSON.stringify(result.data.Countries))
            result.data.Countries.forEach(item => {
                dataArray.push(item)
            })
            this.setState({rows:dataArray})
        })
    }
    render() {
        return (
            <div className="py-4">
                <input className="w-full border-solid text-xl px-4 py-4" placeholder="Search" onChange={(event) => {this.searchname(event.target.value)}}/>
                {this.state.rows.map(item=> (
                    <div>
                        <strong>{item.CountryCode}</strong>
                    </div>
                ))}
                
            </div>
        )
    }
}

export default Search
