'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import MarkdownIt from 'markdown-it'
import matter from 'gray-matter'
import 'prismjs/themes/prism-okaidia.css'
import Prism from 'prismjs'
require('prismjs/components/prism-jsx')
require('prismjs/components/prism-tsx')
require('prismjs/components/prism-typescript')
require('prismjs/components/prism-bash')
require('prismjs/components/prism-markdown')

import { Article } from '@/types/blog/article'
import styles from './ArticleDetail.module.css'

const md = new MarkdownIt()

export default function ArticleDetail({ data }: { data: Article }) {
  const result = matter(data?.article_info.mark_content || '')

  useEffect(() => {
    // window.scrollTo({ top: 0 })
    Prism.highlightAll()
  }, [])

  return (
    <div className={`${styles['container']} prose`}>
      <h1>{data?.article_info.title}</h1>
      <dl>
        <dt></dt>
        <dd>
          <time>
            {new Date(+data?.article_info.ctime * 1000).toLocaleDateString('zh-CN', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </dd>
      </dl>
      {data?.article_info.cover_image && (
        <Image
          src={data?.article_info.cover_image}
          alt={data?.article_info.title}
          priority
          width={1200}
          height={400}
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
      )}
      <div
        dangerouslySetInnerHTML={{
          __html: md.render(result.content),
        }}
      ></div>
    </div>
  )
}
