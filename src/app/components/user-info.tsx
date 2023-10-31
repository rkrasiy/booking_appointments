'use client'

import { signOut, useSession } from 'next-auth/react'
import React from 'react'

const UserInfo = () => {
  const { data:session } = useSession()
  
  if (!session || !session.user) return null

  return (
    <div className='flex gap-4 ml-auto'>
      <p className='text-sky-600'>{session.user.name}</p>
      <button onClick={() => signOut()} className='text-red-600'>Sign Out</button>
    </div>
  )
}

export default UserInfo