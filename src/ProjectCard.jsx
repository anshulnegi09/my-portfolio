import { useState } from 'react';
import './ProjectCard.css';

export default function ProjectCard({ title, description, link }) {
  return (
    <a href={link || "#"} target={link ? "_blank" : "_self"} rel="noopener noreferrer" className="project-card">
      <div className="card-bg">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 407 449" preserveAspectRatio="none">
          {/* Fill rectangle for the background, so it exactly matches the floppy shape */}
          <path className="card-fill" d="M98.703 10.565H48.8865V1.5H34.9135L1.5 31.7168L2.10752 447.5H83.515V437.831H92.6278V447.5H318.017V437.831H327.738V447.5H405.5V1.5H355.683V12.9824V139.893C355.683 146.138 352.524 158.627 339.888 158.627C327.252 158.627 292.502 158.627 276.706 158.627C229.725 158.627 131.752 158.627 115.714 158.627C99.675 158.627 97.6905 146.138 98.703 139.893V10.565Z" fill="var(--bg-color)"/>

          {/* Main Outline */}
          <path className="main-outline" d="M98.703 10.565H48.8865V1.5H34.9135L1.5 31.7168L2.10752 447.5H83.515V437.831H92.6278V447.5H318.017V437.831H327.738V447.5H405.5V1.5H355.683V12.9824" stroke="currentColor" strokeWidth="3" fill="none"/>
          
          {/* Middle Tab (Stationary) */}
          <g className="middle-tab">
            <path className="tab-fill" d="M291.894 12.9824 H355.683 V139.893 C355.683 146.138 352.524 158.627 339.888 158.627 C327.252 158.627 292.502 158.627 276.706 158.627 C281.769 159.03 291.894 155.847 291.894 139.893 C291.894 123.938 291.894 48.6382 291.894 12.9824 Z" fill="var(--bg-color)"/>
            <path d="M291.894 12.9824H355.683" stroke="currentColor" strokeWidth="3" fill="none"/>
            <path d="M355.683 12.9824V139.893C355.683 146.138 352.524 158.627 339.888 158.627C327.252 158.627 292.502 158.627 276.706 158.627" stroke="currentColor" strokeWidth="3" fill="none"/>
          </g>

          {/* Front Tab (Slides right on hover) */}
          <g className="front-tab">
            <path className="tab-fill" d="M98.703 10.565 V1.5 H291.894 V12.9824 C291.894 48.6382 291.894 123.938 291.894 139.893 C291.894 155.847 281.769 159.03 276.706 158.627 C229.725 158.627 131.752 158.627 115.714 158.627 C99.675 158.627 97.6905 146.138 98.703 139.893 V10.565 Z" fill="var(--bg-color)"/>
            <path d="M98.703 10.565V1.5H291.894V12.9824" stroke="currentColor" strokeWidth="3" fill="none"/>
            <path d="M98.703 10.565V139.893C97.6905 146.138 99.675 158.627 115.714 158.627C131.752 158.627 229.725 158.627 276.706 158.627" stroke="currentColor" strokeWidth="3" fill="none"/>
            <path d="M291.894 12.9824C291.894 48.6382 291.894 123.938 291.894 139.893C291.894 155.847 281.769 159.03 276.706 158.627" stroke="currentColor" strokeWidth="3" fill="none"/>
          </g>
        </svg>
      </div>
      <div className="card-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-desc">{description}</p>
      </div>
    </a>
  );
}
