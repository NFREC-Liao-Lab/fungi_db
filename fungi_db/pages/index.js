import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

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
//   const numberOfSequences = 2

//   //Get fileNames from next api
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({"numberOfSequences": numberOfSequences}),
//   }
  
//   const res1 = await fetch("http://localhost:3000/api/getFileNames", options);
//   const fileNames = await res1.json();
//   console.log("filenames are: ", fileNames);
  
//   //Post fileNames and numberOfSequences to node backend
//   const jsonBody = {"numberOfSequences": numberOfSequences, "fileNames": fileNames};
//   const options2 = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(jsonBody),
//   }

//   const response = await fetch("http://localhost:4000", options2);
//   const data = await response.json();
//   console.log(data);

//   //Get data from node backend
//   const getResponse = await fetch("http://localhost:4000");
//   const fileData = await getResponse.json();

//   console.log("fileData is:: ", fileData.data[0].querydb);
//   return{
//     props: {}
//   }
// }