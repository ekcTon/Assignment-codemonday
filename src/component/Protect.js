import React from 'react'
import '../asset/codestyle.css'
import Firstpro from './Mask'
import Secondpro from './Wash'
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