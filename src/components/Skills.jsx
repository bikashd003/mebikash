import React, { useEffect, useRef } from 'react';
import Progress from '../Progress';

function Skills() {
  const progressRefs = useRef([]);

  useEffect(() => {
    const options = {
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        } else {
          entry.target.classList.remove('animate');
        }
      });
    }, options);

    progressRefs.current.forEach((ref) => {
      observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="skills">
      <h3>Most recent used technologies</h3>
      {Progress.map(({ id, name, progress }, index) => (
        <div className="skills" key={id}>
          <div
            className="s-progress"
            style={{ '--progress': `${progress}%` }}
            ref={(el) => (progressRefs.current[index] = el)}
          >
            <span className="s-name">{name}</span>
            <span className="s-percentage">{progress}%</span>
            <span className="s-bar"></span>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Skills;
