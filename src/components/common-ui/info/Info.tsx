import React from 'react';
import styled from "./info.module.scss"
import Image from 'next/image';

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
                <div className={styled.wrapper_social}></div>
            </div>
        </section>
    );
};

export default Info;