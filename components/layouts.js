import Header from './header'
import Footer from './footer'
import Head from 'next/head'

export default function Layout({ children }) {
    return(
        <>
            <Head>
            <title>FungiDB</title>
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header/>
            <main>{children}</main>
            <Footer/>
        </>
    )
}

