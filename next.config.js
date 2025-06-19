/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // 生成静态文件
    basePath: '/home', // 改成你的 GitHub 仓库名（不是用户名）
    images: {
      unoptimized: true, // 如果你用了 <Image>，需要禁用图像优化
    },
    assetPrefix: '/home', // 添加这一行确保 JS/CSS 正确加载
  }
  
  module.exports = nextConfig