import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React from 'react';
import Link from 'next/link';
import {signIn,signOut, useSession} from "next-auth/react";
import Homepage from './Homepage';
import Navbar from '../components/Navbar';



export default function Home() {

  // const { data: session, status } = useSession()
  // const loading = status === "loading"

  return (

    // <Homepage></Homepage>
    <Navbar></Navbar>

    // <div className={styles.container}>
    //   <Head>
    //     <title>Create Next App</title>
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>

    //   <main className={styles.main}>
    //     {!session && (
    //       <>
    //       Not signed in <br></br>
    //       <button onClick={signIn}>Sign In</button>
    //       </>
    //     )}
    //     {
    //       session && (
    //         <>
    //         Signed in as {session.user.email} <br/>
    //         <div>
    //           you are now signed in!!
    //         </div>
    //         <button onClick={signOut}> SignOut</button>
    //         </>
    //       )
    //     }
    //   </main>

    
    //</div>
  )
}
