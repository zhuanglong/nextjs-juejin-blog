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
    <div className="px-3 md:px-0 mx-auto prose prose-indigo">
      <div className="pt-6">
        <h1>{data?.article_info.title}</h1>
        <dl>
          <dt className="sr-only">Published on</dt>
          <dd className="text-base font-medium leading-6 text-gray-500">
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
            className="max-w-full"
            src={data?.article_info.cover_image}
            alt={data?.article_info.title}
            priority
            width={1200}
            height={400}
          />
        )}
        <div
          dangerouslySetInnerHTML={{
            __html: md.render(result.content),
          }}
        />
      </div>
    </div>
  )
}
