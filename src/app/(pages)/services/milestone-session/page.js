import MilestonePhotographyDetail from '@/app/components/Milestone Session/Milestone Detail/MilestonePhotographyDetail'
import MilestoneContactUS from '@/app/components/Milestone Session/MilestoneContactUS/MilestoneContactUS'
import MilestoneImageContainer from '@/app/components/Milestone Session/MilestoneImageContainer/MilestoneImageContainer'
import React from 'react'

const page = () => {
  return (
    <div className="milestone">
    <MilestoneImageContainer/>
    <MilestoneContactUS/>
    <MilestonePhotographyDetail/>
  </div>
  )
}

export default page