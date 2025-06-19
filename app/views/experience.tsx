'use client'

type Experience = {
  org: string
  role: string
  time: string
  description?: string
}

const experienceList: Experience[] = [
  {
    org: 'State Key Lab of CAD & CG, Zhejiang University',
    role: 'Ph.D. Candidate in Computer Science and Technology',
    time: '2022 - Present',
    // description: 'Working on AI-assisted visual analytics and chart understanding.'
  },
  {
    org: 'Microsoft Research Asia (MSRA)',
    role: 'Research Intern',
    time: '2022 - 2023',
    // description: 'Explored LLM-based visualization generation and multi-agent simulations.'
  },
  {
    org: 'Zhejiang University',
    role: 'Undergraduate Student',
    time: '2018 - 2022',
    // description: 'Explored LLM-based visualization generation and multi-agent simulations.'
  },
]

export default function Experience() {
  return (
    <section id="experience">
      <h1 className="text-2xl font-semibold mb-4">Experience</h1>
      <ul className="space-y-6">
        {experienceList.map((exp, idx) => (
          <li key={idx}>
            <h3 className="text-md font-semibold">{exp.role}</h3>
            <p className="text-sm text-gray-700">{exp.org}</p>
            <p className="text-sm italic text-gray-500">{exp.time}</p>
            {exp.description && <p className="text-sm mt-1">{exp.description}</p>}
          </li>
        ))}
      </ul>
    </section>
  )
}
