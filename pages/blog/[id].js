import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import {useEffect, useState} from 'react'

export default function Post ({post}) {

  return (
    <main>
        <Link href="/">Revenir à l'accueil</Link>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
    </main>
  )
}

export async function getStaticProps({params}) {
  const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
  .then(response => response.json())

  return {
    props: {
      post
    }
  }
}


export async function getStaticPaths() {
    const posts =  await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5`)
    .then(response => response.json())
  
    return {
      paths: posts.map( post => ({
        params: {id: post.id.toString()}
      })),
      fallback: false,
    }
  }