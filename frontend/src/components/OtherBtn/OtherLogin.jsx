import React from 'react'
import { FaGoogle, FaMicrosoft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const OtherLogin = () => {
    return (
        <div className="otherBtn flex gap-4 items-center justify-center w-full">
            <Link className="google border flex items-center text-sm px-2 py-1 rounded gap-2">
                <FaGoogle />
                <p id='p'>LogIn with Google</p>
            </Link>
            <Link className="google border flex items-center text-sm px-2 py-1 rounded gap-2">
                <FaMicrosoft />
                <p id='p'>LogIn with Microsoft</p>
            </Link>
        </div>
    )
}

export default OtherLogin