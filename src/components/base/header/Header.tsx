import React from 'react';
import styled from "./header.module.scss"
import Link from 'next/link';

const Header = () => {
    return (
        <header className={styled.header}>
            <div className={styled.name}>
                <Link href={'/'}>Umar Mambetov</Link>
            </div>
            <nav className={styled.navigation}>
                <Link href={'/about'}>About</Link>
                <Link href={'/blog'}>Blog</Link>
                <Link href={'/projects'}>Projects</Link>
            </nav>
        </header>
    );
};

export default Header;