import React from 'react'
import '../asset/codestyle.css'
import Distance from '../asset/img/distance.png'

function Thirdpro() {
    return(
        <div class="px-20 pb-6 h-full w-full text-center text-xl sm:mr-16">
            <img src={Distance} />
            <p class="sm:w-full mt-5 font-bold text-lg sm:text-xl">
                social distancing
            </p>
        </div>
    )
}

export default Thirdpro