import React from 'react'
import '../asset/codestyle.css'
import {useSpring, animated} from 'react-spring'

function Textbanner() {
    const Textbanner = useSpring({ opacity: 1, from: { opacity: 0 }, })
    return(
        <div className="flex justify-center">
            <div className="text-gray-100 font-bold Font-GG text-2xl sm:text-5xl pt-32">
                <animated.h1 style={Textbanner}>Covid-19 Situation Reports</animated.h1>
            </div>
        </div>
    )
}

export default Textbanner