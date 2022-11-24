import React from 'react'
import { NormalWeight } from '../typings'
import Products from './Products'

type Props = {
    normalweights: NormalWeight[]
}

function ProductFeed({normalweights}: Props) {
  return (
    <div className='h-screen w-full'>
        {normalweights.map(normalweight => (
            <Products key={normalweight._id} normalweight={normalweight} />
        ))}
    </div>
  )
}

export default ProductFeed