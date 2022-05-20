import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Header() {
    return(
      <div className={ styles.header }>
        <Link href="/">
          <a className={ styles.header_element }>
            <b>FungiDB</b>
          </a>
        </Link>
  
        <Link href="/tools">
          <a className={ styles.header_element }>Tools</a>
        </Link>
  
        <Link href="/contactUs">
          <a className={ styles.header_element }>Contact Us</a>
        </Link>
  
        <a href="https://sunnymicrobiome.weebly.com" className={ styles.header_element }>Sunny Liao Lab</a>
  
      </div>
    );
  }