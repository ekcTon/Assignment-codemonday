import React, { Component } from 'react'
import '../asset/codestyle.css'
import Countryname from './Countryname'
import Newcon from './NewConfirmed'
import Totalcon from './TotalConfirmed'
import Newdeath from './NewDeaths'
import Totaldeath from './TotalDeaths'
import Newrecover from './NewRecov'
import Totalrecover from './TotalRecov'
import Search from './Search'

export class FetchC extends Component {
    state = {
        loading: true,
        list: [],
    };
    async componentDidMount() {
        const url = "https://api.covid19api.com/summary?fbclid=IwAR0uoH6cU95rR1X8eiYo7iUwWz0bVGViIjc4Hx8J8o36idD48kD_VflcOyg";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({list:data.Countries, loading: false});
    }
    render() {
        if(this.state.loading){
            return <div>loading...</div>
        }
        if(!this.state.list.length){
            return <div>can't get</div>
        }
        return(
            <div>
                 <Search />
                 <div class="table-responsive-sm">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Country</th>
                                <th scope="col">New Cases</th>
                                <th scope="col">Total Cases</th>
                                <th scope="col">New Deaths</th>
                                <th scope="col">Total Deaths</th>
                                <th scope="col">New Recovered</th>
                                <th scope="col">Total Recovered</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.list.map(item=>(
                            <tr>
                                <Countryname ListC={item.Country}/>
                                <Newcon ConfirmeC={item.NewConfirmed}/>
                                <Totalcon TotalconfirmeC={item.TotalConfirmed}/>
                                <Newdeath Newdea={item.NewDeaths}/>
                                <Totaldeath Totaldea={item.TotalDeaths}/>
                                <Newrecover Newrecov={item.NewRecovered}/>
                                <Totalrecover Totalrecov={item.TotalRecovered}/>
                            </tr>
                        ))}
                            
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default FetchC