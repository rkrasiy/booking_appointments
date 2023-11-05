import Footer from "./footer";
import Header from "./header";

export default function ClientPages({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className='flex-grow mt-32 bg-violet-'>
        <div className='container mx-auto'>
          {children}
        </div>
      </main>
      <Footer />
    </>
  )
}