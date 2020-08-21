import React from 'react'
import '../asset/codestyle.css'
import Header from './Header'
import Textbanner from './Textbanner'
import ReportG from './ReportG'
function Background() {
    return(
        <div className="flex w-full">
            <div className="img-bg">
                <div className="bg-black h-full">
                    <Header />
                    <Textbanner />
                    <ReportG />
                </div>
            </div>
        </div>
    )
}

export default Background