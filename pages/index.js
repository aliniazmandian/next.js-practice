import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1> home page </h1>
      <Link href={'/users'} >
        <a>Go to user page . . . !</a>
      </Link>
      <hr></hr>
      <Link href={'/episodes'} >
                <a>Go to episodes page . . . !  </a>
      </Link>

    </div>
  )
}
