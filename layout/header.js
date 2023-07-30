import Link from 'next/link'
import React from 'react'
import {signIn,signOut } from 'next-auth/react'
 
function Header() {
  return (
    <div className='bg-orange-300 p-3 shadow-xl fixed w-screen overflow-visible' >


       <button className='pr-3'  onClick={()=>signIn('github')} >
        Sign in
       </button>

       <button className='' onClick={()=>signOut()} >
        Sign out
       </button>

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