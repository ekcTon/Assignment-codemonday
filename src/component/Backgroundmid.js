import React from 'react'
import '../asset/codestyle.css'
import About from './About'

function Backgroundmid() {
    return(
        <div className="flex w-full">
            <div className="img-bg-mid">
                <div className="bg-black h-full">
                    <About />
                </div>
            </div>
        </div>
    )
}

export default Backgroundmid