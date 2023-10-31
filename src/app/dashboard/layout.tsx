'use client'
import DashboardMenu from '../components/dashboard-menu'

import SignOutSection from '../components/user-info'


function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <div className='flex flex-grow'>
     <DashboardMenu />
      <div className='w-full'>
        <div>
          <SignOutSection />
        </div>
        {children}
      </div>
     </div>
  )
}

export default RootLayout