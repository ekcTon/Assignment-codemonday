import React from 'react'
import '../asset/codestyle.css' 

function Date(props) {
    return(
        <div className="flex justify-center">
            <div className="font-GG text-gray-100 text-lg sm:text-2xl pt-6 px-6">
                <div>Update: {props.Date}</div>
            </div>
        </div>
    )
}

export default Date