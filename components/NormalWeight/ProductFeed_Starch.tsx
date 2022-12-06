import React from 'react'
import { NormalWeight, UnderWeight, OverWeight, Obese } from '../../typings'
import NormalWeights from '../NormalWeight'
import UnderWeights from '../UnderWeight'
import OverWeights from '../OverWeight'
import Obeses from '../Obese'
type Props = {
    normalweights: NormalWeight[]
    
}

function ProductFeed_Starch({normalweights}: Props) {
  return (
    <div className='grid grid-cols-3 m-auto relative'>
        {normalweights.map((normalweight) => (
              normalweight.categories === 'Starch' ? <NormalWeights key={normalweight._id} normalweight={normalweight} /> : <></>
              
        ))}
    </div>
  )
}

export default ProductFeed_Starch