import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import {useEffect, useState} from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home({posts}) {

  return (
    <>
    <Head>
      <title>Test Next - Blog</title>
    </Head>
    <ul>
        {posts.map( post => (
            <li key={post.id}>
                <h3>{post.title}</h3>
            </li>
        ))}
    </ul>
    </>
  )
}

export async function getStaticProps() {
  const posts =  await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
  .then(response => response.json())

  return {
    props: {
      posts
    }
  }
}