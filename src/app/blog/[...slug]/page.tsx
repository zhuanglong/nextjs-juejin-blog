import { notFound } from 'next/navigation'

import ArticleDetail from '@/components/ArticleDetail'
import { getArticleDetail } from '@/lib/blog'

export default async function ArticleDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug
  const { data, err_msg } = await getArticleDetail(slug[0])

  if (err_msg !== 'success') {
    return notFound()
  }

  return (
    <>
      <title>{data.article_info.title}</title>
      <meta name="description" content={data.article_info.brief_content} />
      <ArticleDetail data={data} />
    </>
  )
}
