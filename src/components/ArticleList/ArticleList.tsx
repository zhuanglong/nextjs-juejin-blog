import Link from 'next/link';
import Image from 'next/image';

import Pagination from '@/components/Pagination';
import type { Article } from '@/types/blog/article';

import styles from './ArticleList.module.css';

type Props = {
  articles: Article[];
  currentPage: number;
  totalPages: number;
};

export default function ArticleList({ articles = [], currentPage, totalPages }: Props) {
  return (
    <div className="px-3 max-w-5xl mx-auto">
      <ul>
        {articles.map((article) => (
          <li className="py-4" key={article.article_id}>
            <article className="md:gap-2 md:grid md:grid-cols-4 md:items-start">
              <dl>
                <dt>
                  {article.article_info.cover_image && (
                    <Link href={`/blog/${article.article_id}`}>
                      <Image className="w-full md:w-52" src={article.article_info.cover_image} alt="Cover Image" priority width={1200} height={400} />
                    </Link>
                  )}
                </dt>
                <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                  <span className="sr-only">Published on</span>
                  <time>
                    {new Date(+article.article_info.ctime * 1000).toLocaleDateString('zh-CN', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                </dd>
              </dl>
              <div className="space-y-3 md:col-span-3">
                <div>
                  <h3 className="text-2xl font-bold leading-8 tracking-tight">
                    <Link className="text-gray-900 dark:text-gray-100" href={`/blog/${article.article_id}`}>
                      {article.article_info.title}
                    </Link>
                  </h3>
                  <div className="mt-3 flex flex-wrap">
                    {article.tags.map((tag) => (
                      <Link className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" key={tag.tag_id} href={`/tags/${tag.tag_name}`}>
                        {tag.tag_name}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="prose max-w-none text-gray-500 dark:text-gray-400">{article.article_info.brief_content}</div>
              </div>
            </article>
          </li>
        ))}
      </ul>
      <Pagination totalPages={totalPages} currentPage={currentPage} />
    </div>
  );
}
