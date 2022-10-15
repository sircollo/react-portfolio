import React from 'react'

function ProjectItem({image, name, description, link}) {
  return (
    <div className='projectItem'>
      <div style={{ backgroundImage: `url(${image})`}}></div>
      <h5 className='pt-2'>{name}</h5>
      <p>{description}</p>
      <p>{link}</p>
    </div>
  )
}

export default ProjectItem