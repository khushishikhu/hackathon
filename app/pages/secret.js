import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import PostCard from "../components/Postcard";
import styles from '../styles/Home.module.css';
import dynamic from "next/dynamic";
import Navbar from '../components/Navbar';
import Link from "next/link";
import { Grid } from "@mui/material";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

function Secret({ posts }) {
    const { data: session, status } = useSession();
    const loading = status === "loading"
    const [content, setContent] = useState();


    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("/api/secret/index/");
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
            <>
                <Navbar></Navbar>
                <main>
                    <div>
                        <h1>You aren't sign in. Please signed in first</h1>
                    </div>
                </main>
            </>
        )
    }
    return (
        <>
            <Navbar></Navbar>
            <main>
                <div className={styles.container}>
                    <h1>Add the Finder Information</h1>

                    <br></br>

                </div>
                <div className={styles.container}>
                    {posts.length === 0 ? (
                        <h2>No added posts</h2>
                    ) : (
                        <Grid container spacing={{ xs: 4, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                            {posts.map((post, i) => (
                                <Grid item xs={2} sm={4} md={4} key={i}>
                                    <PostCard post={post} key={i} />
                                </Grid>
                            ))}
                            <Link href="/AddPost">
                                <AddCircleOutlineOutlinedIcon sx={{ fontSize: 40 }} ></AddCircleOutlineOutlinedIcon>
                                Add the Post</Link>

                        </Grid>

                    )}

                </div>
            </main>
        </>
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