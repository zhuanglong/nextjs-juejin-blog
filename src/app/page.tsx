import Link from 'next/link'

import styles from './page.module.css'

export default function HomePage() {
  return (
    <main className={styles.main}>
      <h1>Next.js JueJin Blog</h1>
      <Link href="/blog">全部文章</Link>
    </main>
  )
}
