import React from 'react'
import '../asset/codestyle.css'
import Border1 from './Border-1'


function Cases(props) {
    return(
        <div className="flex-col justify-center pt-2 sm:pt-4">
            <div className="flex-col text-center text-lg sm:text-xl text-gray-100">
                <p>Cases</p>
                <p>Total: {props.Confirmed.TotalConfirmed}</p>
                <p>New: +{props.Confirmed.NewConfirmed}</p>
            </div>
            <div className="w-full justify-center px-8 pt-2">
                <Border1 />
            </div>
        </div>
    )
}

export default Cases