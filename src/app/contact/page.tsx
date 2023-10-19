import Image from 'next/image'
import ClientPages from '../components/client-pages'

export default function ContactPage() {
  return (
    <ClientPages>
      <Image src={"./icon.svg"} alt="icon" width={50} height={50} />
      <h1>Contact us</h1>
      <p>Let us know how we can help you</p>
    </ClientPages>
  )
}