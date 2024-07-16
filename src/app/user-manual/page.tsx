import React from 'react';
import styled from "./user-manual.module.scss"

const UserManual = () => {
    return (
        <main className={styled.container}>
            <h2 className={styled.title}>User Manual</h2>
            <p>This is a playbook on everything Umar. It captures more about me and how I operate in a working environment.</p>
            <div className={styled.content_text_item}>
                <h3 className={styled.sub_title}>🏠OVERVIEW  </h3>
                <p></p>
            </div>

            <div className={styled.content_text_item}>
                <h3 className={styled.sub_title}>👍🏼STRENGTHS</h3>
                <ul className={styled.content_text_ul}>
                    <li> <span>Cross-functional</span>: I’m a generalist at heart and enjoy projects that utilize a broad set of skills across product, data, and growth.</li>
                    <li> <span>Systems thinking</span>: I reduce complexity into systems in order to better understand. I love thinking deeply about interesting problems.</li>
                    <li><span>Moving fast</span>: I get frustrated when I’m not producing frequent output and therefore I like to iterate at a pretty quick pace.
                    </li>
                </ul>
            </div>

            <div className={styled.content_text_item}>
                <h3 className={styled.sub_title}>👎🏼WEAKNESSES</h3>
                <ul className={styled.content_text_ul}>
                    <li><span>Operating without context</span>: I struggle contributing to decisions where I don’t have sufficient context or background.</li>
                    <li><span>Starting simple</span>: My brain will skip baseline approaches and try to do too much, too fast. Don't be afraid to rein me in.</li>
                    <li><span>Overextending myself</span>: I get excited by lots of things and sometimes (okay, all the time) that means I spread myself too thin.
                    </li>
                </ul>
            </div>

            <div className={styled.content_text_item}>
                <h3 className={styled.sub_title}>🛠 PRINCIPLES </h3>
                <ul className={styled.content_text_ul}>
                    <li><span>Bias towards action</span>: Getting started is the best way to begin making progress and start learning. Avoid unchecked inaction.</li>
                    <li><span>Growth mindset</span>: I’m constantly challenging myself to improve. When I get too comfortable, my work and happiness suffer.</li>
                    <li><span>Bigger bets</span>: We should be willing to pass on small opportunities in order to focus on potential step changes.</li>
                    <li><span>Time for thought</span>: I block off time to explore ideas that might not relate to current projects. Without this time, I feel like a machine.</li>
                    <li><span>Keep it simple</span>: Sometimes we have to go into the weeds, but it shouldn't be the default. If it's not the focus, keep it simple. </li>
                    <li><span>Opinions are useful</span>: Both people and products should be opinionated. Taking a stance helps move the conversation forward.</li>
                    <li><span>Learning in public</span>: I'm happier when I'm sharing things that I find helpful. This often means a steady drip of blog posts.</li>
                </ul>
            </div>

            <div className={styled.content_text_item}>
                <h3 className={styled.sub_title}>📲GET IN TOUCH </h3>
                <p> If you want to contact me, I most often reply on Telegram and am usually quite active on LinkedIn. Let me know what's on your mind!</p>
            </div>

        </main>
    );
};

export default UserManual;