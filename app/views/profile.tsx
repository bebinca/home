'use client'
import Image from 'next/image'
import { FaGithub, FaEnvelope, FaGoogle } from 'react-icons/fa'
import { basePath } from '../path'

export default function Profile() {
  return (
    <aside className="w-full md:w-[200px] flex-shrink-0 px-4 pt-4 md:pt-0 pb-8 flex flex-col items-center space-y-4 md:sticky md:top-24 md:h-fit">
      <Image
        src={`${basePath}/avatar.jpg`}
        alt="Avatar"
        width={160}
        height={160}
        className="rounded-full w-32 h-32 object-cover"
      />
      <div className="text-sm text-center space-y-2">
        <div className="flex items-center justify-center gap-2">
          <FaEnvelope className="text-gray-600" />
          <a href="mailto:yuantian@zju.edu.cn" className="hover:underline">yuantian@zju.edu.cn</a>
        </div>
        <div className="flex items-center justify-center gap-2">
          <FaGoogle className="text-gray-600" />
          <a href="https://scholar.google.com/citations?user=TjElz7AAAAAJ" target="_blank" rel="noopener noreferrer" className="hover:underline">Google Scholar</a>
        </div>
        <div className="flex items-center justify-center gap-2">
          <FaGithub className="text-gray-600" />
          <a href="https://github.com/bebinca" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
        </div>
      </div>
    </aside>
  )
}
