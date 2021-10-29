import React from 'react';
import ProjectCard from './ProjectCard';

import projects from '../../resources/project-list';
import './ProjectList.style.scss';
function ProjectList() {

  const projectList = projects.map((project, i) => {
      return <ProjectCard data={project} key={i}></ProjectCard>
    })

    return (
      <div className="project-section">
        <p> Solo projects I am working on.</p>
        <ul>
          {projectList}
        </ul>
      </div>
    )
  }

export default ProjectList;