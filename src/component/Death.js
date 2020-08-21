import React from 'react'
import '../asset/codestyle.css'

function Death(props) {
    return(
        <div className="flex-col text-center text-lg sm:text-xl text-gray-100 px-6">
            <p>Death</p>
            <p>Total: {props.Death.TotalDeaths}</p>
            <p>New: +{props.Death.NewDeaths}</p>
        </div>
    )
}

export default Death