"use client"
import React from 'react';
import styled from "./about.module.scss"
import Link from 'next/link';
import { motion } from "framer-motion"
import LineFollower from '@/components/common-ui/line-follower/LineFollower';

const AboutPage = () => {
    return (
        <main className={styled.container}>
            <LineFollower/>
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

                <div className={styled.item}>
                    <h3 className={styled.sub_title}>PREVIOUSLY</h3>
                    <p>
                        Most recently, I worked at the <span>IT RUN DEV</span> Programming Academy as a support, later I got a job at the <span>ASOI</span> development studio, where we develop universal web applications for business
                    </p>
                </div>

                <div className={styled.item}>
                    <h3 className={styled.sub_title}>work experience</h3>
                    <div className={styled.item_up}>
                        <span>Frontend Developer , ASOI Development Studio</span>
                        <span>03/2023 - present day.</span>
                    </div>
                    <ul className={styled.content_text_ul}>
                        <li>He developed a CRM system for automating a furniture factory using the React JS framework, automated work with orders , which led to a 15% increase in profits%</li>
                        <li>Created web applications using technologies : Next JS, Redis, Node Js for
                        mushroom business with a turnover of 7,000,000 rubles per month</li>
                        <li>Improved user interface (UI) performance by optimizing
                        database interaction, reducing time by 25%.</li>
                        <li>Participated in the project on the implementation of a new monitoring system for</li>
                    </ul>

                    <div style={{marginTop:"30px"}} className={styled.item_up}>
                        <span>Web Development Support , IT RUN Programming Academy</span>
                        <span>09/2022 - 03/2023</span>
                    </div>
                    <ul className={styled.content_text_ul}>
                        <li>Teaching students the basics and advanced aspects of Web Development</li>
                        <li>Development of educational programs and course materials</li>
                        <li>Assessment and analysis of student progress, correction of educational plans</li>
                    </ul>

                </div>

                <div className={styled.item}>
                    <h3 className={styled.sub_title}>EDUCATION</h3>
                    <div className={styled.item_up}>
                        <span>Secondary professional education Programmer Technologist</span>
                        <span>2020 - 2023</span>
                    </div>
                    <span>MUKR International College</span>
                    <ul className={styled.content_text_ul}>
                        <li>Specialization in the field of software.</li>
                        <li>Dissertation on "Innovations in sustainable engineering practice".</li>
                    </ul>
                </div>


                <div className={styled.item}>
                    <h3 className={styled.sub_title}>additional information</h3>
                    <ul className={styled.content_text_ul}>
                        <li>
                            <span>Technical skills</span> : Javascript , Web-APIs , React , Next JS , Redux , Redux-Toolkit ,
                            Node JS , Mongo DB , Scss , Sass , Styled-Components , Mui , Git & Github
                        </li>
                        <li>
                            <span>Languages</span> : English, Russian, Kyrgyz
                        </li>
                        <li>
                            <span>Certificates</span> : Frontend Developer (Itrun), Programmer Technologist (MUKR)
                        </li>
                        <li>
                            <span>Awards/Activity</span> : Gold medalist of the Era of Technology hackathon, Silver medalist of the Digital Competition
                        </li>
                    </ul>
                </div>

                

                <div className={styled.item}>
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
                    <Link href="/user-manual">More about me →  </Link>
                </motion.div>

            </div>
        </main>
    );
};

export default AboutPage;