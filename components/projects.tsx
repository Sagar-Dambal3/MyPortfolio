import { ExternalLink, Github } from 'lucide-react'
import Link from "next/link"

export function Projects() {
  const projects = [
    {
      title: "Advance IDE",
      description:
        "Advance IDE is a comprehensive, web-based integrated development environment (IDE) that allows users to create, edit, and deploy projects. The platform provides isolated environments for each user, supports multiple programming languages, and offers advanced features like auto-scaling, one-click GitHub integration, and long-running backend support.",
      technologies: [
        "React.js/Next.js",
        "Node.js",
        "Express.js",
        "AWS",
        "Docker/Kubernetes",
        "PostgreSQL",
        "Socket.io",
        "Clerk",
        "CI/CD",
      ],
    },
    {
      title: "AI-Powered Chatbot App",
      description:
        "An intelligent chatbot application built using the MERN stack, integrating real-time communication through OpenAI's GPT API to provide personalized and interactive user experiences.",
      technologies: [
        "React.js",
        "Bootstrap",
        "Tailwind CSS",
        "Socket.io",
        "React Spring",
        "Node.js with Express.js",
        "OpenAI API",
        "MongoDB",
        "MySQL",
        "OAuth",
      ],
    },
  ]

  return (
    <div className="pb-8">
      <h2 className="text-2xl font-bold text-white mb-4">Projects</h2>
      <div className="grid gap-6">
        {projects.map((project) => (
          <div 
            key={project.title} 
            className="border border-gray-800 rounded-lg p-6 transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-lg hover:shadow-gray-700/50 bg-gray-900"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <div className="flex gap-2">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                  <span className="sr-only">Github</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <ExternalLink className="w-5 h-5" />
                  <span className="sr-only">External Link</span>
                </Link>
              </div>
            </div>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gray-700 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

