import Image from "next/image"


export default function HeroSection() {


    return (
        <>

            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
                    <div className="lg:col-span-3">
                        <h1 className="block text-6xl font-bold text-gray-800 sm:text-5xl md:text-6xl lg:text-8xl dark:text-white">Club de Padel en <span className="text-blue-600" > Valencia</span> </h1>
                        <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">Reserva pista y comienza a jugar. Si quieres jugar y no encuentras con quién, entra en partidas abiertas</p>

                        <div className="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 relative">

                            <a className="w-full sm:w-auto inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800" href="#">
                                Reservar pista
                            </a>
                            <a className="inline-flex justify-center items-center gap-x-3.5 text-sm lg:text-base text-center border hover:border-gray-300 shadow-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:border-gray-800 dark:hover:border-gray-600 dark:shadow-slate-700/[.7] dark:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800 " href="#">
                                Partidas abiertas
                            </a>

                        </div>
                    </div>
                    <div className="lg:col-span-4 mt-10 lg:mt-0 relative">
                        <div className="hidden md:block absolute bottom-0 left-0 translate-y-10 -translate-x-32">
                            <svg className="w-40 h-auto text-cyan-500" width="347" height="188" viewBox="0 0 347 188" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426" stroke="currentColor" stroke-width="7" stroke-linecap="round"></path>
                            </svg>
                        </div>
                        <Image src={"./headersection.svg"} alt="icon" width={500} height={500} className="block w-full rounded-xl" />

                        <div className="hidden md:block absolute top-0 right-0 -translate-y-12 translate-x-20">
                            <svg className="w-16 h-auto text-orange-500" width="121" height="135" viewBox="0 0 121 135" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164" stroke="currentColor" stroke-width="10" stroke-linecap="round"></path>
                                <path d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5" stroke="currentColor" stroke-width="10" stroke-linecap="round"></path>
                                <path d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874" stroke="currentColor" stroke-width="10" stroke-linecap="round"></path>
                            </svg>
                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}