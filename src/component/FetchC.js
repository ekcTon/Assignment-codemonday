import React, { Component } from 'react'
import '../asset/codestyle.css'

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
                {this.state.list.map(item=>(
                    <div>
                        <div>{item.Country}</div>
                        <div>{item.NewConfirmed}</div>
                        <div>{item.TotalConfirmed}</div>
                        <div>{item.NewDeaths}</div>
                        <div>{item.TotalDeaths}</div>
                        <div>{item.NewRecovered}</div>
                        <div>{item.TotalRecovered}</div>
                    </div>
                    

                ))}
                {/* {this.state.loading || !this.state.list ? (
                    <div>loading...</div>
                ) : (
                // <div>{list.Country}</div>
                
                )} */}
            </div>
        )
    }
//     constructor(props) {
//         super(props);
//         this.state = {
//             items: [],
//             isLoaded: false,
//         }
//     }
// componentDidMount() {
//     fetch('https://api.covid19api.com/summary?fbclid=IwAR0uoH6cU95rR1X8eiYo7iUwWz0bVGViIjc4Hx8J8o36idD48kD_VflcOyg')
//     .then(res => res.json())
//     .then(json => {
//         this.setState({
//             isLoaded:true,
//             items: json,
//         })
//     });
// }
// render() {
//     var {isLoaded , items} = this.state;
//         if(!isLoaded){
//             return<div>Loading...</div>;
//         }
//         else {
//             return (
//                 <div className="w-full flex-col pb-10 bg-red-600">
//                     <div className="flex-col justify-center pt-2 sm:pt-4">
//                         <div className="flex justify-center">
//                             {console.log(items.Countries[0].Country)}
//                             545454545454
//                         </div>
//                     </div>
//                 </div>
                
//             );
//         }
    
// }
}

export default FetchC