'use client'

import { basePath } from "../path"
import Image from 'next/image'

type PubLink = {
  label: string
  url: string
}

type Publication = {
  title: string
  authors: string
  venue: string
  image?: string
  award?: string
  links: PubLink[]
}

const publicationsByYear: { [year: string]: Publication[] } = {
  '2024': [
    {
      title: 'ChartGPT: Leveraging LLMs to Generate Charts From Abstract Natural Language',
      authors: 'Yuan Tian, Weiwei Cui, Dazhen Deng, Xinjing Yi, Yurun Yang, Haidong Zhang, Yingcai Wu',
      venue: 'IEEE Transactions on Visualization and Computer Graphics',
      image: '/figs/chartgpt.png',
      links: [
        { label: 'PDF', url: basePath + '/pdfs/chartgpt.pdf' },
        { label: 'ArXiv', url: 'https://arxiv.org/abs/2311.01920' },
        { label: 'HuggingFace', url: 'https://huggingface.co/yuan-tian/chartgpt-llama3' },
        { label: 'IEEE', url: 'https://ieeexplore.ieee.org/document/10443572' }
      ]
    }, 
    {
        title: 'Relation-driven Query of Multiple Time Series',
        authors: 'Shuhan Liu, Yuan Tian, Zikun Deng, Weiwei Cui, Haidong Zhang, Di Weng, Yingcai Wu',
        venue: 'IEEE Transactions on Visualization and Computer Graphics',
        image: '/figs/relaq.png',
        links: [
          { label: 'PDF', url: basePath + '/pdfs/relaq.pdf' },
          { label: 'IEEE', url: 'https://ieeexplore.ieee.org/abstract/document/10521861' }
        ]
      }
  ], 
  "2023": [
    {
        title: 'A Survey of Urban Visual Analytics: Advances and Future Directions',
        authors: 'Zikun Deng, Di Weng, Shuhan Liu, Yuan Tian, Mingliang Xu, Yingcai Wu',
        venue: 'Computational Visual Media',
        image: '/figs/urban.png',
        links: [
          { label: 'PDF', url: basePath + '/pdfs/urban.pdf' },
          { label: 'Springer', url: 'https://link.springer.com/article/10.1007/s41095-022-0275-7' }
        ]
    }
  ],
  "2022": [
    {
        title: 'ECoalVis: Visual Analysis of Control Strategies in Coal-fired Power Plants',
        authors: 'Shuhan Liu, Di Weng, Yuan Tian, Zikun Deng, Haoran Xu, Xiangyu Zhu, Honglei Yin, Xianyuan Zhan, Yingcai Wu',
        venue: 'IEEE Transactions on Visualization and Computer Graphics (VIS 2022)',
        image: '/figs/ecoalvis.png',
        links: [
          { label: 'PDF', url: basePath + '/pdfs/ecoalvis.pdf' },
          { label: 'IEEE', url: 'https://ieeexplore.ieee.org/abstract/document/9908527' }
        ]
    }
  ],
  "PrePrint": [
    {
        title: 'ReSpark: Leveraging Previous Data Reports as References to Generate New Reports with LLMs',
        authors: 'Yuan Tian, Chuhan Zhang, Xiaotong Wang, Sitong Pan, Weiwei Cui, Haidong Zhang, Dazhen Deng, Yingcai Wu',
        venue: 'ArXiv',
        image: '/figs/respark.png',
        links: [
          { label: 'ArXiv', url: 'https://arxiv.org/abs/2502.02329' },
        ]
    }, 
    {
        title: 'NoteFlow: Recommending Charts as Sight Glasses for Tracing Data Flow in Computational Notebooks',
        authors: 'Yuan Tian, Dazhen Deng, Sen Yang, Huawei Zheng, Bowen Shi, Kai Xiong, Xinjing Yi, Yingcai Wu',
        venue: 'ArXiv',
        image: '/figs/noteflow.png',
        links: [
          { label: 'ArXiv', url: 'https://arxiv.org/abs/2502.02326' },
        ]
    }
  ]
}

function highlightAuthor(authors: string, name: string) {
    return authors.split(/,\s*/).map((author, idx) => {
      const trimmed = author.trim()
      const isYou = trimmed.includes(name)
      return (
        <span key={idx}>
          {idx > 0 && ', '}
          {isYou ? <strong className="font-semibold underline">{trimmed}</strong> : trimmed}
        </span>
      )
    })
  }
  

export default function Publications() {
  return (
    <section id="publications">
      <h1 className="text-2xl font-semibold mb-4">Publications</h1>
      <div className="space-y-10">
        {Object.entries(publicationsByYear)
        .sort((a, b) => Number(b[0]) - Number(a[0])) // 按年份倒序排列
        .map(([year, pubs]) => (
          <div key={year}>
            <h2 className="text-lg font-semibold mb-2">{year}</h2>
            <ul className="space-y-6">
              {pubs.map((pub, i) => (
                <li key={i} className="flex flex-col md:flex-row gap-4 p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition">
                  {pub.image && (
                    <img
                    src={`${basePath}/${pub.image}`} 
                    alt={pub.title} 
                    className="w-full md:w-48 h-32 object-cover rounded" 
                    style={{ maxWidth: '100%', maxHeight: '100%' }}
                    />
                  )}
                  <div className="flex-1 space-y-1">
                    <h3 className="font-semibold">{pub.title}</h3>
                    <p className="text-sm text-gray-700">
                    {highlightAuthor(pub.authors, 'Yuan Tian')}
                    </p>
                    <p className="text-sm italic text-gray-700">{pub.venue}</p>
                    {pub.award && (
                      <p className="text-sm text-amber-600 font-medium">{pub.award}</p>
                    )}
                    <div className="flex flex-wrap gap-2 mt-1 pt-2">
                      {pub.links.map((link, j) => (
                        <a
                          key={j}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded hover:bg-blue-200"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
