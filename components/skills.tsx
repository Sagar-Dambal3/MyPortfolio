export function Skills() {
    const skills = [
      "HTML",
      "CSS",
      "Bootstrap",
      "Tailwind CSS",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MySQL",
      "AWS",
      "Git/GitHub",
      "Java",
      "Manual Testing",
      "CI/CD",
    ]
  
    return (
      <div className="pb-8">
        <h2 className="text-2xl font-bold text-white mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gray-700 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    )
  }
  
  