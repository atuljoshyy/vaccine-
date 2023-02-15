import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <>
      <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <Navbar />
        <Hero />
        {/* <Footer /> */}
      </div>

    </>
  )
}
