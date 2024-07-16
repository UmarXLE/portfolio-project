import React from 'react';
import styled from "./blog.module.scss"

const BlogPage = () => {
    return (
        <main className={styled.container}>
           <h2 className={styled.title}>Blogs</h2>
           <p className={styled.proccessing}>In the process of development...</p>
        </main>
    );
};

export default BlogPage;