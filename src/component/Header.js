import React from 'react'
import '../asset/codestyle.css'

function Header() {
    return(
        <header className="w-full top-0 bg-img">
            <div className="container flex flex-col mx-auto py-6 px-6">
                <div className="flex-col font-GG text-gray-100">
                    <a className="text-xl sm:text-4xl">Situation Reports</a>
                    <a className="text-sm">&nbsp;By Ekkachai</a>
                </div>
            </div>
        </header>
    )
}

export default Header