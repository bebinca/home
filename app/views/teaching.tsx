'use client'

export default function Teaching() {
  const teachingList = [
    { date: '2023-2024', text: 'Cross Media Visualization and Information Visualization' },
    { date: '2023-2024', text: 'International Visualization Summer School of ZJU' }
  ]

  return (
    <section id="teaching">
      <h1 className="text-2xl font-semibold mb-4">Teaching</h1>
      <ul className="space-y-2">
        {teachingList.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <span className="font-semibold text-sm min-w-[4.5rem]">{item.date}</span>
            <span className="text-sm">{item.text}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}