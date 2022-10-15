import React from 'react'
import '../styles/Projects.css'
import { ProjectList } from '../Projects/ProjectList'
import ProjectItem from './ProjectItem'
function Projects() {
  return (
    <div className='projects' id='projects'>
      <h1 className='projectTitle pt-5'>Projects</h1>
      <div className='projectList'>{ProjectList.map((projectItem, key) =>{
        return <ProjectItem key={key} image={projectItem.image} name={projectItem.name} description={projectItem.description} link={projectItem.link}/>
      })}</div>
    </div>
  )
}

export default Projects