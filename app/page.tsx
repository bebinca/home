import Header from "./views/header"
import Profile from "./views/profile"
import Description from "./views/description"
import Publications from "./views/publications"
import Experience from "./views/experience"
import News from "./views/news"
import Teaching from "./views/teaching"
import Services from "./views/services"

export default function Home() {
  return (
    <main>
      <Header />
      <div className="flex flex-col md:flex-row max-w-[1080px] mx-auto px-4 py-8 gap-8">
        
        {/* 左边固定栏 */}
        <Profile />

        {/* 右边主内容区 */}
        <div className="flex-1 space-y-12">
          <Description />
          <News />
          <Publications />
          <Experience />
          <Services />
          <Teaching />
        </div>
      </div>

      {/* 底栏 */}
      <footer className="text-center text-sm text-gray-500 py-6 border-t">
        © {new Date().getFullYear()} Yuan Tian. All rights reserved. Last updated: Aug 2026
      </footer>
    </main>
  )
}