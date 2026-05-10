import Hero from "@/components/sections/Hero"
import Services from "@/components/sections/Services"
import About from "@/components/sections/About"
import Legalitas from "@/components/sections/Legalitas"
import Team from "@/components/sections/Team"
import Contact from "@/components/sections/Contact"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <About />
      <Legalitas />
      <Team />
      <Contact />
    </main>
  )
}