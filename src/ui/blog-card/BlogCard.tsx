import React from 'react';
import styled from "./blog.module.scss"

const BlogCard = () => {
    return (
        <div className={styled.container}>
            <h3 className={styled.title}>🙏 27 Principles for 27 Years</h3>
            <h5 className={styled.sub_title}>Jul 14, 2023 • 3 min • Life</h5>
            <p className={styled.description}>It’s that time of the year where I reflect on another trip around the sun. I’m turning 27 years old and unsurprisingly I don’t feel different than I did yesterday. But if I turn the clock back a year earlier, it does feel quite different now...</p>
        </div>
    );
};

export default BlogCard;