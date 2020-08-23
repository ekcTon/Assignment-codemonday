import React from 'react'
import '../asset/codestyle.css'
import {useSpring, animated} from 'react-spring'

function Death(props) {
    const Totaldea = useSpring({ number: props.Death.TotalDeaths, from: { number: 1000 } })
    const Newdea = useSpring({ number: props.Death.NewDeaths, from: { number: 1000 } })
    return(
        <div className="flex-col text-center text-lg sm:text-xl text-gray-100 px-6">
            <p>Death</p>
            <p>Total: <animated.span>{Totaldea.number}</animated.span></p>
            <p>New: +<animated.span>{Newdea.number}</animated.span></p>
        </div>
    )
}

export default Death