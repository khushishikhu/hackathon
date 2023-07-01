import { useState,useEffect } from "react";
import { useSession } from "next-auth/react";
import PostCard from "../components/Postcard";
import styles from '../styles/Home.module.css';
import dynamic from "next/dynamic";

function Secret({posts}){
    const{data: session,status}= useSession();
    const loading = status === "loading"
    const[content,setContent]= useState();


    useEffect(()=>{
        const fetchData = async()=>{
            const res = await fetch("/api/secret");
            const json = await res.json();
            if(json.content){
                setContent(json.content)
            }
        }
        fetchData();
    },[session])

    if(typeof window !== "undefined" && loading) return null;

    if(!session){
        return(
            <main>
                <div>
                    <h1>You aren't sign in. Please signed in first</h1>
                </div>
            </main>
        )
    }
    return(
        <main>
            <div>
                <h1>Protected Pages</h1>
                
            </div>
            <div className={styles.container}>
                    {posts.length === 0 ? (
                        <h2>No added posts</h2>
                    ) : (
                        <ul>
                            {posts.map((post, i) => (
                                <PostCard post={post} key={i} />
                            ))}
                        </ul>
                    )}
                </div>
        </main>
    )

}

export async function getServerSideProps(ctx) {
    // get the current environment
    let dev = process.env.NODE_ENV !== 'production';
    let { DEV_URL, PROD_URL } = process.env;

    // request posts from api
    let response = await fetch(`${dev ? DEV_URL : PROD_URL}/api/posts/posts`);
    // extract the data
    let data = await response.json();

    return {
        props: {
            posts: data['message'],
        },
    };
}

export default dynamic(() => Promise.resolve(Secret), {ssr: false,});