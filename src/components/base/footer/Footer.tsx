"use client"
import React from 'react';
import styled from "./footer.module.scss"
import Link from 'next/link';
import Image from 'next/image';
import { motion } from "framer-motion"

const Footer = () => {
    return (
        <footer className={styled.footer}>
            <div className={styled.container}>
                <div className={styled.info}>
                    <Link href={'/about'}>© Umar Mambetov</Link>
                </div>
                <div className={styled.wrapper_social}>
                    <motion.div
                        whileHover={{ scale: 1.2, rotate: 90 }}
                        whileTap={{
                            scale: 0.8,
                            rotate: -90,
                            borderRadius: "100%"
                        }}
                    >
                        <a href="https://github.com/umar-mambetov">
                            <Image
                                src="/assets/icons/github-footer.png"
                                alt="github"
                                width={24}
                                height={24} />
                        </a>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.2, rotate: 90 }}
                        whileTap={{
                            scale: 0.8,
                            rotate: -90,
                            borderRadius: "100%"
                        }}
                    >
                        <a href="https://www.linkedin.com/in/umar-mambetov/">
                            <Image
                                src="/assets/icons/instagram-footer.png"
                                alt="instagram"
                                width={24}
                                height={24} />
                        </a>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.2, rotate: 90 }}
                        whileTap={{
                            scale: 0.8,
                            rotate: -90,
                            borderRadius: "100%"
                        }}
                    >
                        <a href="https://www.linkedin.com/in/umar-mambetov/">
                            <Image
                                src="/assets/icons/telegram-footer.png"
                                alt="telegram"
                                width={24}
                                height={24} />
                        </a>
                    </motion.div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;