'use client'

export default function Teaching() {
  const teachingList = [
    { emphasize: 'Summer 2024-2025', text: 'TA in the International Visualization Summer School, ZJU' },
    { emphasize: 'Summer 2023', text: 'Coordinator & TA in the International Visualization Summer School, ZJU' },
    { emphasize: 'Winter 2023', text: 'Coordinator & TA in Cross Media Visualization and Information Visualization, ZJU' }
  ]

  return (
    <section id="teaching">
      <h1 className="text-2xl font-semibold mb-4">Teaching</h1>
      <ul className="list-disc list-inside space-y-1">
        {teachingList.map((item, idx) => (
          <li key={idx} className="text-base">
            <span className="font-semibold">{item.emphasize},</span>{' '}
            <span className="text-gray-600">{item.text}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
