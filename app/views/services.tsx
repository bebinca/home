'use client'

export default function News() {
  const newsList = [
    { date: '2025-06', text: 'Our paper on GraphTide was conditionally accepted to UIST 2025!' },
    { date: '2025-03', text: 'I gave an invited talk at XYZ Workshop on visual analytics.' },
    { date: '2024-11', text: 'Received Best Paper Honorable Mention at IEEE VIS 2024.' }
  ]

  return (
    <section id="news">
      <h1 className="text-2xl font-semibold mb-4">News</h1>
      <ul className="space-y-2">
        {newsList.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <span className="font-semibold text-sm min-w-[4.5rem]">{item.date}</span>
            <span className="text-sm">{item.text}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}