import React from 'react'
import '../asset/codestyle.css'
import {useSpring, animated} from 'react-spring'

function Recover(props) {
    const Totalrecov = useSpring({ number: props.Recovered.TotalRecovered, from: { number: 1000 } })
    const Newrecov = useSpring({ number: props.Recovered.NewRecovered, from: { number: 1000 } })
    return(
        <div className="flex-col text-center text-lg sm:text-xl text-gray-100 px-6">
            <p>Recovered</p>
            <p>Total: <animated.span>{Totalrecov.number}</animated.span></p>
            <p>New: +<animated.span>{Newrecov.number}</animated.span></p>
        </div>
    )
}

export default Recover