import type {NextApiRequest, NextApiResponse} from 'next'

export default async (req:NextApiRequest, res:NextApiResponse) =>{
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
    const {items, email} = req.body
    const transformedItems = items.map((item:any) => ({    
        price_data: {  
            currency: 'usd',
            unit_amount:item.price * 100,  
            product_data: {      
                name: item.name,
                description: item.ingredients,
                images: [item.image]
            }
        },
        quantity: 1,
    }))

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        shipping_options: [{shipping_rate: 'shr_1MD3rXLvU7IyGFiC8dPeD2Wh'}],
        shipping_address_collection: {
            allowed_countries: ['GB', 'US', 'CA']
        },
        line_items: transformedItems,
        mode: 'payment',
        success_url: `${process.env.HOST}/success`,
        cancel_url: `${process.env.HOST}/checkout`,
        metadata: {
            email,
            images: JSON.stringify(items.map((item:any) => item.image))
        }
    })
    res.status(200).json({id: session.id})
}


