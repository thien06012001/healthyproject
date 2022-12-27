import { doc, setDoc, getDocs ,collection, getDoc } from 'firebase/firestore/lite'
import { query, orderBy } from "firebase/firestore/lite"; 
import React from 'react'

import db, { auth } from '../firebase'
import moment from 'moment';
import Order from '../components/Order';
import Navbar from '../components/Navbar';
import { useSelector } from 'react-redux';
import { selectUser } from '../slices/userSlice';
import { useAuthState} from 'react-firebase-hooks/auth'
function Orders(/*{orders}:any*/) {
  const session= useSelector(selectUser);
  
  // console.log(orders)
  return (
    // <div>
    //     <Navbar />
    //     <main className='max-w-screen-lg mx-auto p-10'>
    //       <h1 className='text-3xl border-b mb-2 pb-1 border-yellow-400'>
    //         Your orders
    //       </h1>
    //       {session ? (
    //         <h2>{orders.length} Orders</h2>
    //       ) : (
    //         <h2>Please sign in to see your orders</h2>
    //       )}

    //       <div className='mt-5 space-y-4'>
    //         {orders?.map( ({id, amount, amountShipping, items, timestamp, images}:any) => (
    //           <Order
    //           key={id}
    //           id={id}
    //           amount={amount}
    //           amountShipping={amountShipping}
    //           items={items}
    //           timestamp={timestamp}
    //           images={images}
    //           />
    //         ))}
    //       </div>
    //     </main>
    // </div>

    <div>
      <h1>Orders</h1>
    </div>
  )
}

export default Orders

// export async function getServerSideProps(context : any) {
//   const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

//   //Get the users logged in credentials..
//   const [user, loading, error] = useAuthState(auth);
//   if(!user){
//     return {
//       props: {},
//     }
//   }

//   //firebase database
//   const ref = collection(db, "users", user.email, "orders")

//   const q = query(ref, orderBy('timestamp', 'desc'))
//   const stripeOrders = await getDocs(q)

//   //Stripe orders 
//   const orders = await Promise.all(
//     stripeOrders.docs.map(async (order) => ({
//       id: order.id,
//       amount: order.data().amount,
//       amountShipping: order.data().amount_shipping,
//       images: order.data().images,
//       timestamp: moment(order.data().timestamp.toDate()).unix(),
//       items: (
//         await stripe.checkout.sessions.listLineItems(order.id, {
//           limit: 100
//         })
//       ).data,

//     }))
//   )

//   return {
//     props: {
//       orders,
//     }
//   }
// }


