'use client'

export default function Services() {
  const serviceList = [
    {emphasize: '2024-Present', text: 'Reviewer for IEEE PacificVis Journal Track, Computers & Graphics'}
  ]

  return (
    <section id="service">
      <h1 className="text-2xl font-semibold mb-4">Services</h1>
      <ul className="list-disc list-inside space-y-1">
        {serviceList.map((item, idx) => (
          <li key={idx} className="text-base">
            <span className="font-semibold">{item.emphasize},</span>{' '}
            <span className="text-gray-600">{item.text}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}