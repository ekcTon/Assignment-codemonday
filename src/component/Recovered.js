import React from 'react'
import '../asset/codestyle.css'

function Recover(props) {
    return(
        <div className="flex-col text-center text-lg sm:text-xl text-gray-100">
            <p>Recovered</p>
            <p>Total: {props.TotalRecovered}</p>
            <p>New: +{props.NewRecovered}</p>
        </div>
    )
}

export default Recover