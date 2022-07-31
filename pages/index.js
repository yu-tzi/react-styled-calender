import Head from 'next/head'
import styles from '../styles/Home.module.css'
import DatePicker from './component'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>React Date Picker Demo by Kiki</title>
        <meta name="description" content="React Date Picker Demo by Kiki" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DatePicker/>
    </div>
  )
}
