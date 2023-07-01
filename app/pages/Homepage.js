import React from "react";
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import {signIn,signOut, useSession} from "next-auth/react";

export default function Homepage(){
    const { data: session, status } = useSession()
  const loading = status === "loading"

    return(
        <div className={styles.container}>
        <Head>
          <title>HooDog</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className={styles.main}>
          {!session && (
            <>
            Not signed in <br></br>
            <button onClick={signIn}>Sign In</button>
            </>
          )}
          {
            session && (
              <>
              Signed in as {session.user.email} <br/>
              <div>
                you are now signed in!!
              </div>
              <button>
                <Link href="/secret"> To the Homepage</Link>
              </button>
              <button onClick={signOut}> SignOut</button>
              </>
            )
          }
        </main>
        </div>

    )

}


