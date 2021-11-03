import React from 'react';
import './ProjectCard.style.scss';
import '../../App.scss';

function ProjectCard(props) {
  const { name, image, details, tools, git, link } = props.data;
  const toolList = tools.map((tool, i) => <div key={i}>{tool}</div>);
  const detailList = details.map((detail, i) => <li key={i}>{detail}</li>);

  return (
    <section>
    <div className="project-card-view">
        
        <div className="preview-content">
          <h2 className="preview-title">{name}</h2>
            <ul className="preview-details">{detailList}</ul>
            <div className="project-tools">
              {toolList}
            </div>
            <div className="preview-action">
              <a href={git} target="_blank" rel="noreferrer">GIT</a>
              <a href={link} target="_blank" rel="noreferrer">LIVE</a>
            </div>
        </div>
        <figure className="preview-media">   
           <img src={image} alt="gif" />
        </figure>
    </div>
</section>
  )
}

export default ProjectCard;