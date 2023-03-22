import Head from 'next/head'
import Image from 'next/image'
import { Main } from '../components/Main'
import { About } from '../components/About'
import { Skills } from '../components/Skills'
import { Projects } from '../components/Projects'
import { Contact } from '../components/Contact'
import Link from 'next/link';

import styles from '../../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Diego Gamboa | Front-End Developer</title>
        <meta name="description" content="I’m a front-end web developer specializing exceptional digital experiences." />
        {/* <link rel="icon" href="/fav.png" /> */}
      </Head>
    <Main />
    <About />
    <Skills />
    <Projects />
    <Contact />
    </div>
 )
}
