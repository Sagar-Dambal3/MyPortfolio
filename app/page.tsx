import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Header } from "@/components/header"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Header />
        <About />
        <Experience />
        <Skills />
        <Projects />
      </div>
      <Footer />
    </div>
  )
}

