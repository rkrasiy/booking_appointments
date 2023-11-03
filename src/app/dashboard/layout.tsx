'use client'

import AuthButton from '../components/Auth-Button'
import MenuColumn from './menu-column'


function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  

  return (
    <div className='flex flex-grow'>
      <MenuColumn />
      <div className='w-full'>
        <AuthButton />
        {children}
      </div>
    </div>
  )
}

export default RootLayout