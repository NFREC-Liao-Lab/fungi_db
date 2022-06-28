import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export const numberOfResults = 10;

export default function Home() {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <h1 className={styles.title}>
          FungiDB- A Databse for Fungi.
        </h1>

        <p className={styles.description}>
          description here
        </p>

        
      </main>
    </div>
  )
}

// export async function getServerSideProps(){
//   try{
//     const res = await fetch("http://localhost:3000/api/testApi");
//     if(res.status !== 200){
//       throw `status from back end is ${res.status}, there was an internal server error`;
//     }
//     console.log(res.status);
//     const out = await res.json();
//     console.log("out is: ", out);
//   }
//   catch(err){
//     console.log(err);
//   }
//   return{
//     props: {}
//   }
// }
