'use client'

export default function Description() {
  return (
    <section id="about">
      <h1 className="text-2xl font-semibold mb-4">About Me</h1>
      <p className="text-base leading-relaxed">
        I am currently a Ph.D. candidate at the&nbsp;
        <a href="http://www.cad.zju.edu.cn" target="_blank" className="text-blue-600 hover:underline">
          State Key Lab of CAD&amp;CG, Zhejiang University
        </a>, and a member of the&nbsp;
        <a href="http://zjuidg.org" target="_blank" className="text-blue-600 hover:underline">
          Interactive Data Group (ZJUIDG)
        </a>, supervised by&nbsp;
        <a href="http://ycwu.org" target="_blank" className="text-blue-600 hover:underline">
          Prof. Yingcai Wu
        </a>. My research focuses on AI-assisted visual analytics, with a particular interest in using large language models (LLMs) to support data understanding and visualization generation.
      </p>
    </section>
  )
}