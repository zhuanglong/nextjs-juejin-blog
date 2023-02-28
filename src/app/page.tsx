import Link from 'next/link'

import styles from './page.module.css'

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-slate-100">
      <h1 className="text-2xl font-bold">Next.js JueJin Blog</h1>
      <a className="pt-3 text-primary-500 underline" href="/blog">全部文章</a>
    </main>
  )
}
