import EsterContactUs from '@/app/components/EsterPhotography/EsterContactUs/EsterContactUs'
import EsterImageContainer from '@/app/components/EsterPhotography/EsterImageContainer/EsterImageContainer'
import EsterPhotographyDetail from '@/app/components/EsterPhotography/EsterPhotographyDetail/EsterPhotographyDetail'
import React from 'react'

const page = () => {
  return (
    <div className="ester">
    <EsterImageContainer/>
    <EsterContactUs/>
    <EsterPhotographyDetail/>
  </div>
  )
}

export default page