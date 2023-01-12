import {
  getDocs,
  collection,
} from "firebase/firestore/lite";
import { query, orderBy } from "firebase/firestore/lite";
import React from "react";
import nookies from "nookies";
import { firebaseAdmin } from "../firebaseAdmin";
import db from "../firebase";
import moment from "moment";
import Order from "../components/OrdersPage/Order";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { selectUser } from "../slices/userSlice";
import 'firebase/auth';
import Head from "next/head";
import Icon from "../public/assets/Logo.png";
function Orders({ orders }: any) {
  const session = useSelector(selectUser);

  console.log(orders);
  return (
    <div className="bg-lime-50 h-auto min-h-screen">
      <Head>
        <title>Sign Up</title>
        <link rel="icon" href={Icon.src} />
      </Head>
      <Navbar />
      <main className="max-w-screen-lg mx-auto p-10 bg-white">
        <h1 className="text-3xl border-b mb-2 pb-1 border-yellow-400">
          Your orders
        </h1>
        {session ? (
          <h2>{orders.length} Orders</h2>
        ) : (
          <h2>Please sign in to see your orders</h2>
        )}

        <div className="mt-5 space-y-4">
          {orders?.map(
            ({ id, amount, amountShipping, items, timestamp, images }: any) => (
              <Order
                key={id}
                id={id}
                amount={amount}
                amountShipping={amountShipping}
                items={items}
                timestamp={timestamp}
                images={images}
              />
            )
          )}
        </div>
        
      </main>
    </div>

  
  );
}

export default Orders;

export async function getServerSideProps(context: any) {
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

  try {
  const cookies = nookies.get(context);
  const token = await firebaseAdmin.auth().verifyIdToken(cookies.token);

  // the user is authenticated!
  const { uid, email } = token;
  if (!email) {
    return {
      props: {},
    };
  }
  
  // FETCH STUFF HERE!! 🚀

  //firebase database
  const ref = collection(db, "users", email, "orders");

  const q = query(ref, orderBy("timestamp", "desc"));
  const stripeOrders = await getDocs(q);

  //Stripe orders
  const orders = await Promise.all(
    stripeOrders.docs.map(async (order) => ({
      id: order.id,
      amount: order.data().amount,
      amountShipping: order.data().amount_shipping,
      images: order.data().images,
      timestamp: moment(order.data().timestamp.toDate()).unix(),
      items: (
        await stripe.checkout.sessions.listLineItems(order.id, {
          limit: 100,
        })
      ).data,
    }))
  );

  return {
    props: {
      orders,
    },
  };

  } catch (err) {
    // either the `token` cookie didn't exist
    // or token verification failed
    // either way: redirect to the login page
    context.res.writeHead(302, { Location: '/Login' });
    context.res.end();

    // `as never` prevents inference issues
    // with InferGetServerSidePropsType.
    // The props returned here don't matter because we've
    // already redirected the user.
    return { props: {} as never };
  }
}
