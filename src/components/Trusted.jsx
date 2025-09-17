import React from 'react'
import assets, { company_logos } from '../assets/assets'

const Trusted = () => {
  return (
    <div>
        <h3 className='font-semibold'>Trusted by Leading Compaines</h3>
        <div className=' flex items-center justify-center flex-wrap gap-10 m-4'>
            {
                company_logos.map((img, index)=>{
                    <img key={index} src={img.}></img>
                })

            }

        </div>



    </div>
  )
}

export default Trusted