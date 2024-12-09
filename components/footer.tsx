import Link from "next/link"
import { Mail, Phone, Github, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-4">
            <Link href="https://github.com/Sagar-Dambal3" className="text-gray-400 hover:text-white transition-colors" target="_blank">
              <Github className="w-6 h-6" />
              <span className="sr-only">Github</span>
            </Link>
            <Link href="https://www.linkedin.com/in/sagar-dambal/" className="text-gray-400 hover:text-white transition-colors" target="_blank">
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="mailto:sagardambal3@gmail.com" className="text-gray-400 hover:text-white transition-colors" target="_blank">
              <Mail className="w-6 h-6" />
              <span className="sr-only">Email</span>
            </Link>
            <Link href="tel:9481478454" className="text-gray-400 hover:text-white transition-colors" target="_blank">
              <Phone className="w-6 h-6" />
              <span className="sr-only">Phone</span>
            </Link>
          </div>
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Sagar Dambal. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

