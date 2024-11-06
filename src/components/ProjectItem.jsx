import React from 'react'
import { Link } from 'react-router-dom'

const ProjectItem = ({item}) => {
  return (
    <Link to={`/projects/${item.id}`}>
    <div className="item">
        <div className="body">
            <img src={item.imageUr1} alt={item.imageAlt} />
        </div>
        <div className="footer">
            <div className="project-information">
                <h4 className="project-title">{item.title}</h4>
                <p className="project-category">{item.category}</p>
            </div>
            <i className="fa-regular fa-chevron-right"></i>
        </div>
    </div>
    </Link>
  )
}

export default ProjectItem