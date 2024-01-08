'use client'
import React, { useEffect } from 'react'
import Searchbar from './Searchbar'
import { useUser, UserButton} from '@clerk/nextjs'
const Header = () => {
    const {user} = useUser();
   
  return (
    <div className='ml-64 p-5 border-b flex items-center justify-between'>
        <Searchbar/>
        {!user?<button>Login</button>:
        <UserButton/>}
    </div>
  )
}

export default Header