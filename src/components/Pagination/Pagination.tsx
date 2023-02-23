import Link from 'next/link'

import styles from './Pagination.module.css'

interface Props {
  totalPages: number;
  currentPage: number;
}

export default function Pagination({ totalPages, currentPage }: Props) {
  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages

  return (
    <div className={styles['container']}>
      <nav>
        {!prevPage && (
          <button disabled={!prevPage}>上一页</button>
        )}
        {prevPage && (
          <Link href={currentPage - 1 === 1 ? `/blog/` : `/blog/page/${currentPage - 1}`}>上一页</Link>
        )}
        <span>{currentPage} of {totalPages}</span>
        {!nextPage && (
          <button disabled={!nextPage}>下一页</button>
        )}
        {nextPage && (
          <Link href={`/blog/page/${currentPage + 1}`}>下一页</Link>
        )}
      </nav>
    </div>
  )
}
