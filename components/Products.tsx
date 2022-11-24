import React from 'react'
import { urlFor } from '../sanity'
import { NormalWeight} from '../typings'
type Props = {
    normalweight: NormalWeight
}

function Products({normalweight}: Props) {
  return (
    <div className='h-10 w-10'>
        Checking
        <img className='w-32 h-32' src={urlFor(normalweight.image).url()} alt="" />
    </div>
  )
}

export default Products