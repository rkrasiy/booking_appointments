'use client'
import DashboardMenu from '../components/dashboard-menu'
import isAuth from '../components/isAuth'
import { isAuthenticated } from '../utils/auth'


function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <div className='flex flex-grow'>
     <DashboardMenu />
      <div className='w-full'>
        <div>Salir</div>
        {children}
      </div>
     </div>
  )
}

export default RootLayout