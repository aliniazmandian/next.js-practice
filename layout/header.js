import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className='bg-orange-300 shadow-xl fixed w-screen overflow-visible' >


        <Link className='' href={""} >
        <a> Sign in  </a>
        </Link>

        <Link href={""} >
        <a> Sign out  </a>
        </Link>

        <Link href={""} >
        <a> Profile  </a>
        </Link>

        <Link href={""} >
        <a> Menu  </a>
        </Link>

    </div>

  )
}

export default Header