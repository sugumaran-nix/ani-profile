import { Navbar }     from '@/components/sections/Navbar'
import { Hero }       from '@/components/sections/Hero'
import { About }      from '@/components/sections/About'
import { Skills }     from '@/components/sections/Skills'
import { Projects }   from '@/components/sections/Projects'
import { Contact }    from '@/components/sections/Contact'
import { Footer }     from '@/components/sections/Footer'
import { Particles }  from '@/components/ui/Particles'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export default function Home() {
  return (
    <>
      <Particles />
      <ScrollReveal />
      <Navbar />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
