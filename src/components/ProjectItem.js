import React from 'react'

function ProjectItem({image, name, description, link}) {
  return (
    <div className='projectItem'>
      <a target="_blank" href={link} rel="noreferrer">
      <div style={{ backgroundImage: `url(${image})`}}></div>
      <h5 className='pt-2'>{name}</h5>
      <p>{description}</p>
      </a>
    </div>
  )
}

export default ProjectItem