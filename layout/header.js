import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className='bg-orange-300 p-3 shadow-xl fixed w-screen overflow-visible' >


        <Link  href={"/sign-in"} >
        <a className='p-3'> Sign in  </a>
        </Link>

        <Link href={"/sign-out"} >
        <a className='p-3'> Sign out  </a>
        </Link>

        <Link href={"/profile"} >
        <a className='p-3'> Profile  </a>
        </Link>

        <Link href={"/"} >
        <a className='p-3'> Menu  </a>
        </Link>

    </div>

  )
}

export default Header