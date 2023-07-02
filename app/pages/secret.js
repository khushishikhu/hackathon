import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import PostCard from "../components/Postcard";
import styles from '../styles/Home.module.css';
import dynamic from "next/dynamic";
import Navbar from '../components/Navbar';

function Secret({ posts }) {
    const { data: session, status } = useSession();
    const loading = status === "loading"
    const [content, setContent] = useState();


    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("/api/secret");
            const json = await res.json();
            if (json.content) {
                setContent(json.content)
            }
        }
        fetchData();
    }, [session])

    if (typeof window !== "undefined" && loading) return null;

    if (!session) {
        return (
            <main>
                <div>
                    <h1>You aren't sign in. Please signed in first</h1>
                </div>
            </main>
        )
    }
    return (
        <main>
            <Navbar />
            <div className='' >
                {posts.length === 0 ? (
                    <h2>No added posts</h2>
                ) : (
                    <div className="card-container">
                        {/* {posts.map((post, i) => (
                            <PostCard post={post} key={i} />
                        ))} */}
                        <PostCard />
                        <PostCard />
                        <PostCard />
                        <PostCard />
                        <PostCard />
                        <PostCard />
                        <PostCard />
                    </div>
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

export default dynamic(() => Promise.resolve(Secret), { ssr: false, });