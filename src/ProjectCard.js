// ProjectCard.js
import React from 'react';

const ProjectCard = ({ title, description, location, timeline, image, onClick }) => {
    return (
        <div className="project-card" onClick={onClick} style={{ cursor: 'pointer' }}>
            <img src={image} alt={title} className="project-image" />
            <h3>{title}</h3>
            <p>{description}</p>
            <p>location: {location}</p>
            <p>timeline: {timeline}</p>
        </div>
    );
};

export default ProjectCard;
