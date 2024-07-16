import React from 'react';
import styled from "./info.module.scss"
import Image from 'next/image';
import { social_data } from '@/local-data/data';

const Info = () => {
    return (
        <section className={styled.container}>
            <div className={styled.images}>
                <Image
                    src="/assets/images/avatar.png"
                    alt="Umar Mambetov"
                    // layout='responsive'
                    width={200}
                    height={200} />
            </div>
            <div className={styled.content}>
                <h3><span>Hey, I'm Umar.</span> I'm a Frontend Developer</h3>
                <div className={styled.wrapper_social}>
                    {social_data.map((item, index) => (
                        <a className={styled.item_social} href={item.link} key={index}>
                            <Image
                                src={item.img}
                                alt={item.title}
                                width={20}
                                height={20} />
                            <span>{item.title}</span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Info;