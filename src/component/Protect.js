import React from 'react'
import '../asset/codestyle.css'
// import Mask from '../asset/img/patient.png'
import Firstpro from './Mask'
// import Wash from '../asset/img/hand-wash.png'
import Secondpro from './Wash'
// import Distance from '../asset/img/distance.png'
import Thirdpro from './Distance'

function Protect() {
    return(
        <div className="flex justify-center">
            <div className="container">
                <div className="flex justify-center font-extrabold font-GG text-3xl sm:text-4xl pt-4">PROTECT YOURSELF</div>
                <div className="w-full sm:flex justify-center pt-6 font-GG">
                    <Firstpro />
                    <Secondpro />
                    <Thirdpro />
                </div>
            </div>
        </div>
    )
}

export default Protect