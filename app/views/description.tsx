'use client'

export default function Description() {
  return (
    <section id="about">
      <h1 className="text-2xl font-semibold mb-4">About Me</h1>
      <p className="text-base leading-relaxed">
        I am a Ph.D. candidate at the&nbsp;
        <a href="http://www.cad.zju.edu.cn" target="_blank" className="text-blue-600 hover:underline">
          State Key Lab of CAD&amp;CG, Zhejiang University
        </a>, and a member of the&nbsp;
        <a href="http://zjuidg.org" target="_blank" className="text-blue-600 hover:underline">
          Interactive Data Group (ZJUIDG)
        </a>, supervised by&nbsp;
        <a href="https://dengdazhen.github.io/" target="_blank" className="text-blue-600 hover:underline">
          Prof. Dazhen Deng</a>
        &nbsp;and&nbsp;
        <a href="http://www.ycwu.org" target="_blank" className="text-blue-600 hover:underline">
          Prof. Yingcai Wu
        </a>. My research focuses on AI-assisted visual analytics, with a particular interest in using large language models (LLMs) to support data understanding and visualization generation.
      </p>
      <p className="text-base leading-relaxed mt-1">
        Currently, I am a visiting scholar at CMU, working with{" "}
        <a href="https://www.cs.cmu.edu/~sherryw/" target="_blank" className="text-blue-600 hover:underline">
          Prof. Sherry Wu
        </a>{" "}
        in the{" "}
        <a href="https://www.cs.cmu.edu/~sherryw/group.html" target="_blank" className="text-blue-600 hover:underline">
          WINE Lab
        </a>.
      </p>
      <p className="text-base leading-relaxed mt-1">
        I expect to graduate in 2027 and am actively seeking job opportunities. Please feel free to reach out!
      </p>
    </section>
  )
}