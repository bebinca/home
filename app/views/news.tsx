'use client'

export default function News() {
  const newsList = [
    { date: '2026-07', text: 'Our paper "ChartGPT: Leveraging LLMs to Generate Charts from Abstract Natural Language" received the TVCG 2025 Best Paper Award!' },
    { date: '2026-07', text: '1 paper accepted to IEEE VIS 2026.' },
    { date: '2026-06', text: '1 paper accepted to ACM UIST 2026.' },
    { date: '2026-04', text: 'I\'m thrilled to start my visit at CMU, working with Prof. Sherry Wu!' },
    { date: '2026-01', text: '2 papers, NoteFLow and ExChart, were accepted to ACM CHI 2026.' }
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