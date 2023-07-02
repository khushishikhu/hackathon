import Head from 'next/head';

import PostCard from '../components/Postcard';
import styles from '../styles/Home.module.css';
import dynamic from "next/dynamic";

function FinderPage({ posts }) {
    return (
        <div>
            <Head>
                <title>Home</title>
            </Head>

            <main>
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
        </div>
    );
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

export default dynamic(() => Promise.resolve(FinderPage), {ssr: false,});