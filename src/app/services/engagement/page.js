import EngagementContactUs from '@/app/components/Engagement/Engagement ContactUs/EngagementContactUs'
import EngagementDetail from '@/app/components/Engagement/EngagementPhotographyDetail/EngagementDetail'
import ImageContainer from '@/app/components/Engagement/ImageContainer/ImageContainer'
const page = () => {
  return (
    <div className="engagement">
    <ImageContainer/>
    <EngagementContactUs/>
    <EngagementDetail/>
  </div>
  )
}

export default page