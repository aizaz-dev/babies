import SpringContactUs from '@/app/components/Spring Family/Spring ContactUs/SpringContactUs'
import SpringDetail from '@/app/components/Spring Family/SpringDetail/SpringDetail'
import SpringImageContainer from '@/app/components/Spring Family/SpringImageContainer/SpringImageContainer'
import React from 'react'

const page = () => {
  return (
    <div className="spring">
            <SpringImageContainer/>
            <SpringContactUs/>
            <SpringDetail/>
          </div>
  )
}

export default page