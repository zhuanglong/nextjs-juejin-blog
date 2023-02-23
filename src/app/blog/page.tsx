import ArticleList from '@/components/ArticleList'
import { getArticles } from '@/lib/blogApi'

export default async function BlogPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page = Number(searchParams.page) || 1
  
  const uid = process.env.uid!
  const { data, count } = await getArticles(uid, (+page - 1) * 10)

  return <ArticleList articles={data} totalPages={count} currentPage={page} />
}
