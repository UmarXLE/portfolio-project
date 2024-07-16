import ProjectsBLog from '@/components/common-ui/projects/Project';
import React from 'react';
import styled from './projects.module.scss'

const ProjectsPage = () => {
    return (
        <main className={styled.container}>
            <h2 className={styled.title}>Projects</h2>
            <ProjectsBLog/>
        </main>
    );
};

export default ProjectsPage;