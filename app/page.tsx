import Header from "./views/header"
import Profile from "./views/profile"
import Description from "./views/description"
import Publications from "./views/publications"
import Experience from "./views/experience"
import News from "./views/news"

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
          {/* <News /> */}
          <Publications />
          <Experience />
        </div>
      </div>
    </main>
  )
}


// import About from "./views/about"
// import Experience from "./views/experience"
// import Publications from "./views/publications"
// import Header from "./views/header"

// export default function Home() {
//   return (
//     <main>
//       <Header/>
//       <div className="w-full px-0 md:w-[70%] lg:mx-auto">
//       <About/>
//       <Publications/>
//       <Experience/>
//       </div>
//     </main>
//   )
// }
