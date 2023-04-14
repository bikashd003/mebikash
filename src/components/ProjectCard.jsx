import React from "react";
import projects from "../projects";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from 'react-scroll';

function ProjectCard() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="p-container">
        {projects.map(({ id, imageURL, URL, title }) => {
          return (
            <article key={id} className="p-item">
              <div className="p-img">
                <img src={imageURL} alt={title} />
              </div>
              <h3 className="p-title">{title}</h3>
              <div className="p-url">
                <Link to={URL} target="_blank">
                  Demo
                </Link>
                <Link to={`/${title}`} onClick={scrollToTop}>
                  Details
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default ProjectCard;
