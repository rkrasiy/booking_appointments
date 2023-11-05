'use client'
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { clientRoutes } from "../_common/menu"
import { Button } from "./button"
import AuthButton from "./Auth-Button"

export default function Header() {
  const pathname = usePathname()
  const navigate = useRouter()

  return (
    <header className="shadow-1 bg-white shadow-md fixed w-full p-3 z-[999]">
      <div className="w-full max-w-screen-xl xl:mx-auto">
        <Image src={"./logo-padel.svg"} alt="icon" width={120} height={250} className="inline-block p-3"/>
        <nav className="inline-flex justify-end">
          {
            clientRoutes.map(({ route, name }) => (
              <Link
                key={name}
                className={`p-3 ${pathname === route ? 'text-blue-500' : 'text-slate-500'}`}
                href={route}
                title={name}>
                {name}</Link>
            ))
          }
        </nav>
        <AuthButton />
      </div>

    </header>
  )
}