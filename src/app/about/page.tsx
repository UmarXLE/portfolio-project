"use client"
import React from 'react';
import styled from "./about.module.scss"
import Link from 'next/link';
import { motion } from "framer-motion"

const AboutPage = () => {
    return (
        <main className={styled.container}>
            <h2 className={styled.title}>Hey, I'm Umar 👋🏼</h2>
            <div className={styled.wrapper_content}>
                <p>
                    A <span>professional</span> with more than <span> 2 years</span> of experience in the field of Web Development, combining the
                    expertise of a project manager and the skills of a Frontend Developer. My
                    skills include deep knowledge of Web development, the development of complex CRM systems and
                    the creation of visually beautiful web applications using technologies such as <span>React JS</span> . I also own <span>Next JS , Node JS</span> and have experience working with <span>MongoDB</span> databases ,
                    <span> PostgreSQL </span>. My projects don't just achieve their goals, they set new standards
                    in the innovative use of web applications to achieve business <span>success</span>.
                </p>
                <p>
                    If you want to contact me , I most often reply in <a href="https://t.me/umar_mambetov">Telegram</a> and am usually quite active on <a href="">LinkedIn</a>.
                </p>

                <div>
                    <h3 className={styled.sub_title}>PREVIOUSLY</h3>
                    <p>
                        Most recently, I worked at the <span>IT RUN DEV</span> Programming Academy as a support, later I got a job at the <span>ASOI</span> development studio, where we develop universal web applications for business
                    </p>
                </div>

                <div>
                    <h3 className={styled.sub_title}>USER MANUAL  </h3>
                    <p> I created a playbook on how to <Link href={""}>work with me</Link>. It captures some of my strengths, weaknesses, and principles that I aim to follow.</p>
                </div>

                <motion.div
                    whileHover={{
                        transition: { duration: 0.2 },
                        x: 30,
                        y: 0,
                        scale: 1,
                        rotate: 0,
                    }}
                    whileTap={{ scale: 0.9 }}
                >
                    <Link href="https://github.com/umar-mambetov">More about me →  </Link>
                </motion.div>

            </div>
        </main>
    );
};

export default AboutPage;