import React from 'react'
import '../asset/codestyle.css'
import Header from './Header'
function Background() {
    return(
        <div className="flex w-full">
            <div className="img-bg">
                <div className="bg-black h-full">
                    <Header />
                </div>
            </div>
        </div>
    )
}

export default Background