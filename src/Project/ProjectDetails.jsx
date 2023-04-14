import React from 'react';
import ProjectMeaning from '../ProjectMeaning';
import '../styles2.css'

function ProjectDetails({ projectId }) {
  const project = ProjectMeaning.find(proj => proj.id === parseInt(projectId));
  if (!project) {
    return <div>Project not found</div>;
  }

  const { title, tech, details, imgURL } = project;

  return (
    <section className="project-details">
      <article className='project-container'>
        <h3>{title}</h3>
        <h6>{tech}</h6>
        <img src={imgURL} alt={title} />
        <span>{details}</span>
      </article>
    </section>
  );
}

export default ProjectDetails;
