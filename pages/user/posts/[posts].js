import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import customAxios from './../../../shared/axios.instance';
import Layout from './../../../components/layout';
import PostItem from './../../../components/post/PostItem';

const Posts = () => {
    const { query } = useRouter();

    const [posts, setPosts] = useState([]);

    useEffect(async () => {
        const res = await customAxios.get('/user/' + query.posts + '/post');
        const data = await res.data;
        setPosts(data.data);
        console.log(data.data);
    }, []);

    return (
        <Layout title="Posts">
            <div className="row">
                <div className="main-section py-1">
                    {posts.map((post) => <PostItem post={post} key={Math.random()} />)}
                </div>
            </div>
        </Layout>
    );
}

export default Posts;