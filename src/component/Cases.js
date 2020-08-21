import React from 'react'
import '../asset/codestyle.css';


function Cases(props) {
    return(
        <div class="w-full">
            <div class="flex-col justify-center pt-4 sm:pt-4">
                <div class="flex-col text-lg sm:text-xl text-gray-100">
                    <p>Cases</p>
                    <p>Total: {props.Confirmed.TotalConfirmed}</p>
                    <p>New: +{props.Confirmed.NewConfirmed}</p>
                </div>
            </div>
        </div>
    )
}

export default Cases