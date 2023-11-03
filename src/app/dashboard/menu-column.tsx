import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function MenuColumn () {
  const pathname = usePathname()
  return (
    <div className="w-1/5 border-r border-slate-400 pt-4">
        <div className="flex flex-col p-2">
          <Image src={"./icon.svg"} alt="icon" width={50} height={50} className="inline-block" />
          <nav className="mt-4">
            {
              [
                { route: "/", name: "Web" },
                { route: "/dashboard", name: "Perfil" },
                { route: "/dasbboard/clients", name: "Clients" },
                { route: "/dashboard/paymants", name: "Payments" },
                { route: "/dashboard/calendar", name: "Calendar" }
              ].map(({ route, name }) => (
                <Link
                  key={name}
                  className={`py-3 ${pathname === route ? 'text-blue-500' : 'text-slate-500'} block`}
                  href={route}
                  title={name}>
                  {name}</Link>
              ))
            }
          </nav>
        </div>
      </div>
  )
}