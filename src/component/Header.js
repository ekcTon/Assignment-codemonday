import React from 'react'
import '../asset/codestyle.css'
import TextHead from './TeaxtHeader'

function Header() {
    return(
        <header className="w-full top-0 bg-black fixed">
            <div className="container flex flex-col mx-auto py-4">
                <TextHead />
            </div>
        </header>
    )
}

export default Header