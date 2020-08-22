import React from 'react'
import '../asset/codestyle.css'
import Wash from '../asset/img/hand-wash.png'

function Secondpro() {
    return(
        <div class="px-20 pb-6 h-full w-full text-center text-xl sm:mx-16">
            <img src={Wash} />
            <p class="sm:w-full mt-5 font-bold text-lg sm:text-xl">
                wash your hands
            </p>
        </div>
    )
}

export default Secondpro