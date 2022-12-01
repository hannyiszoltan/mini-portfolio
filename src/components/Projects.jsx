import React from 'react';
import projects from '../data/projects';
import ProjectsContent from './ProjectsContent';

function Projects(){
    return(
        <section className='flex min-h-screen flex-col md:flex-row items-center justify-center'>
        <div className='grid grid-cols-1 md:grid-cols--2 lg:grid-cols-2 gap-8'>
            {projects.map(project => (
                <ProjectsContent 
                    imgURL={project.imgURL}
                    name={project.name}
                    stack={project.stack}
                    link={project.link}
                />
            ))}
        </div>
        </section>
    )
}

export default Projects;