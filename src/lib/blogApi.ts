export async function getArticles(uid: string, cursor: number = 0) {
  const res = await fetch(
    'https://api.juejin.cn/content_api/v1/article/query_list',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cursor: cursor + '',
        sort_type: 2,
        user_id: uid + '',
      }),
    },
  )

  return res.json()
}

export async function getArticleDetail(article_id: string) {
  const res = await fetch(
    'https://api.juejin.cn/content_api/v1/article/detail',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        article_id
      }),
    },
  )

  return res.json()
}