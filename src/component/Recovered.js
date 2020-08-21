import React from 'react'
import '../asset/codestyle.css'

function Recover(props) {
    return(
        <div className="flex-col text-center text-lg sm:text-xl text-gray-100 px-6">
            <p>Recovered</p>
            <p>Total: {props.Recovered.TotalRecovered}</p>
            <p>New: +{props.Recovered.NewRecovered}</p>
        </div>
    )
}

export default Recover