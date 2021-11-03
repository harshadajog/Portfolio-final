import React from 'react';
import ProjectCard from './ProjectCard';

import projects from '../../resources/project-list';
import './ProjectList.style.scss';
function ProjectList() {

  const projectList = projects.map((project, i) => {
      return (
        <div key={i}>
          <br />
        <ProjectCard data={project} key={i}></ProjectCard>
        </div>
  )})

    return (
      <div className="project-section">
           <ul>
          {projectList}
        </ul>
      </div>
    )
  }

export default ProjectList;