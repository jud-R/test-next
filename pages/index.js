import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import {useEffect, useState} from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home({posts, date}) {

  return (
    <>
    <Head>
      <title>Test Next - Blog</title>
    </Head>
    <h1>Date : {date}</h1>
    <ul>
        {posts.map( post => (
            <li key={post.id}>
              <Link href={`blog/${post.id}`}>
                  <h3>{post.id} - {post.title}</h3>
              </Link>
            </li>
        ))}
    </ul>
    </>
  )
}

export async function getStaticProps() {
  const posts =  await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5`)
  .then(response => response.json())

  return {
    props: {
      posts,
      date: (new Date().toString())
    },
    revalidate: 5,
  }
}