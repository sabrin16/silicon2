import React from 'react'

import Breadcrumb from '../components/Breadcrumb'
import { useParams } from 'react-router-dom'

const ServiceDetails = () => {
    const {id} = useParams()

  return (
    <>
      <Breadcrumb /> 
      <section className="service-details">
        <div className="container">
            <div className="headline">
                {id}
            </div>
        </div>
      </section>
    </>
  )
}

export default ServiceDetails