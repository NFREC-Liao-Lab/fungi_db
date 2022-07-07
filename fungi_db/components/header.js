import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Header() {
    return(
      <div className={ styles.header }>
        <Link href="/">
          <a className={ styles.header_element }>
            <b>FungaBank</b>
          </a>
        </Link>

        <Link href="/databasePages">
          <a className={ styles.header_element}>Database</a>
        </Link>
  
        <Link href="/blast">
          <a className={ styles.header_element }>BLAST</a>
        </Link>
  
        <Link href="/contactUs">
          <a className={ styles.header_element }>Contact Us</a>
        </Link>
  
        <a href="https://sunnymicrobiome.weebly.com" className={ styles.header_element }>Sunny Liao Lab</a>
  
      </div>
    );
  }