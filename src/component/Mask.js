import React from 'react'
import '../asset/codestyle.css'
import Mask from '../asset/img/patient.png'

function Firstpro() {
    return(
        <div class="px-20 pb-6 h-full w-full text-center text-xl sm:ml-16">
            <img src={Mask} />
            <p class="sm:w-full mt-5 font-bold text-lg sm:text-xl">
                Put on a face mask
            </p>
        </div>
    )
}

export default Firstpro