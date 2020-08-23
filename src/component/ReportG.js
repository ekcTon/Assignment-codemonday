import React from 'react'
import '../asset/codestyle.css'
import FetchG from './FetchG'
import {useSpring, animated} from 'react-spring'


function ReportG() {
    return(
        <div className="flex justify-center pt-4">
            <div className="w-full sm:w-1/3">
                <FetchG />
            </div>
        </div>
    )
}

export default ReportG