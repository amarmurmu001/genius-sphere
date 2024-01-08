'use client'
import React, { useEffect } from 'react'
import Searchbar from './Searchbar'
import { useUser, UserButton} from '@clerk/nextjs'
import { useRouter } from 'next/navigation'

const Header = () => {
    const {user} = useUser();
    const router = useRouter();
   
  return (
    <div className='ml-64 p-5 border-b flex items-center justify-between'>
        <Searchbar/>
        {!user?<button onClick={()=>router.push("/sign-in")}>Login</button>:
        <UserButton/>}
    </div>
  )
}

export default Header