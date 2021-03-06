import Head from 'next/head';
import { useRouter } from 'next/router';
import CssBaseline from '@material-ui/core/CssBaseline';

import styles from '../styles/Home.module.css'
import Header from '../components/header';
import GoTopButton from '../components/go-top-button';

const Layout = ({ children, title = 'Novel Comic Web' }) => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <div className={styles.container}>
      <CssBaseline />
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        {children}
      </main>
      
      <GoTopButton />
      <footer className={styles.footer}>
        Copyright 2021 - tinhto
      </footer>
    </div>
  )
}

export default Layout;