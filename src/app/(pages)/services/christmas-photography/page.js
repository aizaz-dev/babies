import Christmas from '@/app/components/Christmas/Christmas'
import ContactUs from '@/app/components/Christmas/Christmas Contact-us/ContactUs'
import DetailParagraph from '@/app/components/Christmas/Photography-Details/DetailParagraph'
import React from 'react'

const page = () => {
  return (
    <div className="christmas">
            <Christmas/>
            <ContactUs/>
            <DetailParagraph/>
          </div>
  )
}

export default page