import PetContactUs from '@/app/components/PetPhotography/Pet ContactUs/PetContactUs'
import PetImageContainer from '@/app/components/PetPhotography/PetImageContainer/PetImageContainer'
import PetDetail from '@/app/components/PetPhotography/PetPhotographyDetail/PetDetail'
import React from 'react'

const page = () => {
  return (
    <div className="pet-photography">
            <PetImageContainer/>
            <PetContactUs/>
            <PetDetail/>
          </div>
  )
}

export default page