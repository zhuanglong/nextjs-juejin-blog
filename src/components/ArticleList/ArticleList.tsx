import Link from 'next/link'
import Image from 'next/image'

import Pagination from '@/components/Pagination'
import type { Article } from '@/types/blog/article'

import styles from './ArticleList.module.css'

type Props = {
  articles: Article[];
  currentPage: number;
  totalPages: number;
}

export default function ArticleList({
  articles = [],
  currentPage,
  totalPages,
}: Props) {
  return (
    <div className={styles['container']}>
      <ul>
        {articles.map((article) => (
          <li key={article.article_id}>
            <article>
              <dl>
                <dt>
                  {article.article_info.cover_image && (
                    <Link href={`/blog/${article.article_id}`}>
                      <Image
                        src={article.article_info.cover_image}
                        alt="Cover Image"
                        priority
                        width={1200}
                        height={400}
                        style={{
                          maxWidth: '100%',
                          height: 'auto',
                        }}
                      />
                    </Link>
                  )}
                </dt>
                <dd>
                  <time>
                    {new Date(+article.article_info.ctime * 1000).toLocaleDateString('zh-CN', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                </dd>
              </dl>
              <div className={styles['article-title']}>
                <h3>
                  <Link href={`/blog/${article.article_id}`}>
                    {article.article_info.title}
                  </Link>
                </h3>
              </div>
              <div className={styles['article-tags']}>
                {article.tags.map((tag) => (
                  <Link key={tag.tag_id} href={`/tags/${tag.tag_name}`}>
                    {tag.tag_name}
                  </Link>
                ))}
              </div>
              <div className={styles['brief-content']}>
                {article.article_info.brief_content}
              </div>
              <div></div>
            </article>
          </li>
        ))}
      </ul>
      <Pagination totalPages={totalPages} currentPage={currentPage} />
    </div>
  )
}
