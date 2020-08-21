import React, { Component } from 'react'
import '../asset/codestyle.css'
import Date from './Date'
import Cases from './Cases'
import Recovered from './Recovered'
import Death from './Death'
import Border1 from './Border-1'

export class FetchG extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }
componentDidMount() {
    fetch('https://api.covid19api.com/summary?fbclid=IwAR0uoH6cU95rR1X8eiYo7iUwWz0bVGViIjc4Hx8J8o36idD48kD_VflcOyg')
    .then(res => res.json())
    .then(json => {
        this.setState({
            isLoaded:true,
            items: json,
        })
    });
}
render() {
    var {isLoaded , items} = this.state;
        if(!isLoaded){
            return<div>Loading...</div>;
        }
        else {
            return (
                <div className="w-full flex-col pb-10 bg-red-600">
                    <Date Date={items.Date}/>
                    <Cases Confirmed={items.Global}/>
                    <div className="flex-col justify-center pt-2 sm:pt-4">
                        <div className="flex justify-center">
                            <Recovered Recovered={items.Global} />
                            <Border1 />
                            <Death Death={items.Global} />
                        </div>
                    </div>
                    <div className="flex-col">
                        <div className="w-full">
                            {/* <div className="flex justify-center pt-2 sm:pt-4">
                                <div className="flex-col text-center text-lg sm:text-xl text-gray-100">
                                    <p>Cases</p>
                                    <p>Total: </p>
                                    <p>New: +2135</p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
                
            );
        }
    
}
}

export default FetchG