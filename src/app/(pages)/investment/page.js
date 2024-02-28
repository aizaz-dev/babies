import Investment from '../../components/Investment/Investment'
import Maternity from '../../components/Maternity-cakesmash/Maternity'
import Professional from '../../components/Professional/Professional'
import Services from '../../components/Other-services/Services'

const page = () => {
  return (
    <div>
    <div className='investment'>
      <Investment/>
    </div>
    <div className="maternity-cakesmash">
      <Maternity/>
    </div>
    <div className="professional">
      <Professional/>
    </div>
    <div className="service">
      <Services/>
    </div>
  </div>
  )
}

export default page