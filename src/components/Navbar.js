import { Link } from 'react-router-dom'
import { useState } from 'react'
import logo from '../assets/img/badgerloopTextWhite.png'
import Team from '../pages/Team.js'

export default function Navbar() {
    let onDropdown = false
    const [showDropdown, setShowDropdown] = useState(false)

    const toggleDropdown = () => {
        setShowDropdown(true)
        onDropdown = true
    }

    const hideDropdownOnHover = () => {
        onDropdown = false
        setTimeout(() => {
            if (!onDropdown) {
                setShowDropdown(false)
            }
        }, 300)
    }

    return (
        <header className="sticky top-0 z-50 flex gap-4 h-12 lg:px-6 px-4 bg-uw-red justify-between items-center">
            <Link className="object-contain w-1/4" to="/">
                <img src={logo} alt="logo" />
            </Link>
            <div className="flex lg:gap-12 gap-8 text-white items-center">
                <div className="relative">
                    <button
                        className="font-bold text-lg hover:scale-110 duration-300 ease-in-out"
                        onMouseEnter={toggleDropdown}
                        onMouseLeave={hideDropdownOnHover}
                    >
                        About
                    </button>
                    {showDropdown && (
                        <div className="absolute top-10 left-[-30px] bg-uw-red rounded-md shadow-lg py-2 w-40">
                            <Link
                                to="/team"
                                className="block px-4 py-2 text-white hover:bg-white hover:text-uw-red"
                                onMouseEnter={toggleDropdown}
                                onMouseLeave={hideDropdownOnHover}
                            >
                                Our Team
                            </Link>
                        </div>
                    )}
                </div>
                <Link
                    to="/"
                    className="font-bold text-lg hover:scale-110 duration-300 ease-in-out"
                >
                    Sponsors
                </Link>
                <Link
                    to="/"
                    className="font-bold text-lg hover:scale-110 duration-300 ease-in-out"
                >
                    Contact
                </Link>
                <Link
                    to="https://secure.supportuw.org/give/?id=93cf38e8-6152-4f29-8065-02b2e65a84bd"
                    className="font-bold text-lg hover:scale-110 duration-300 ease-in-out"
                >
                    Donate
                </Link>
            </div>
        </header>
    )
}

// Sponsors
// Contact
// Donate
// About
// --> About Badgerloop
// --> About ASC
// Our Team
// Archive
