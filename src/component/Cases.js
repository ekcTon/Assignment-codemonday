import React from 'react'
import '../asset/codestyle.css'
import Border1 from './Border-1'
import {useSpring, animated} from 'react-spring'


function Cases(props) {
    const Totalcon = useSpring({ number: props.Confirmed.TotalConfirmed, from: { number: 1000 } })
    const Newcon = useSpring({ number: props.Confirmed.NewConfirmed, from: { number: 1000 } })
    return(
        <div className="flex-col justify-center pt-2 sm:pt-4">
            <div className="flex-col text-center text-lg sm:text-xl text-gray-100">
                <p>Cases</p>
                <p>Total: <animated.span>{Totalcon.number}</animated.span></p>
                <p>New: +<animated.span>{Newcon.number}</animated.span></p>
            </div>
            <div className="w-full justify-center px-8 pt-2">
                <Border1 />
            </div>
        </div>
    )
}

export default Cases