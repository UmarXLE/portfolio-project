import React from 'react';
import styled from "./blog.module.scss"
import BlogCard from '@/ui/blog-card/BlogCard';

const BlogActual = () => {
    return (
        <section className={styled.container}>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
        </section>
    );
};

export default BlogActual;