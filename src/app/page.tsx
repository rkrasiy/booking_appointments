import ClientPages from "./components/client-pages"
import Footer from "./components/footer"
import Header from "./components/header"
import HeroSection from "./components/hero-section"

const Section = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <div className='h-screen bg-white flex items-center justify-center'>
      {children}
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Header />
     
      <main className='flex-grow'>
        
        {
          [<HeroSection />, "2", "3", "4"].map(item => (
            <Section key={item}><div>{item}</div></Section>
          ))
        }
      </main>
      <Footer />
    </>
  )
}