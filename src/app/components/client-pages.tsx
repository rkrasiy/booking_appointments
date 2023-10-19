import Footer from "./footer";
import Header from "./header";

export default function ClientPages({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className='flex-grow mt-12'>
        <div className='container mx-auto'>
          {children}
        </div>
      </main>
      <Footer />
    </>
  )
}