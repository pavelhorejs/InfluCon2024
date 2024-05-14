// import Stripe from "stripe";
// import { NextResponse, NextRequest } from "next/server";
// import * as appwrite from "appwrite";

// const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET!);
// const client = new appwrite.Client();
// client
//   .setEndpoint("https://cloud.appwrite.io/v1")
//   .setProject("66329460003701abe30c");

// const database = new appwrite.Databases(client);

// export async function POST(req: NextRequest, res: NextResponse) {
//   const payload = await req.text();
//   const sig = req.headers.get("Stripe-Signature");

//   try {
//     const event = stripe.webhooks.constructEvent(
//       payload,
//       sig!,
//       process.env.STRIPE_WEBHOOK_SECRET!
//     );
//     console.log("payment type ???????????? ", event.type);

//     if (event.type === "payment_intent.succeeded") {
//       const paymentIntent = event.data.object as Stripe.PaymentIntent;
//       console.log("payment ... ", paymentIntent);

//       const userId = paymentIntent.metadata?.userId;
//       if (userId) {
//         const result = await database.updateDocument(
//           "66392c62001ed202eeb8",
//           userId,
//           JSON.stringify({ paid: "true" })
//         );
//         console.log("User profile updated with payment:", result);
//       } else {
//         console.log("No user ID found in payment metadata");
//       }
//     } else {
//       console.log("Ignoring event:", event.type);
//     }
//   } catch (err) {
//     console.error("Error handling webhook event:", err);
//   }
// }

// stripe listen --forward-to localhost:3000/api/webhooks

import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import * as appwrite from "appwrite";
import { headers } from "next/headers";

const endpointSecret = process.env.STRIPE_TEST_WEBHOOK;

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

import { Account, Client, Databases, ID, Query } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("66329460003701abe30c");

const database = new appwrite.Databases(client);
const account = new Account(client);

export async function POST(req) {
  try {
    const body = await req.text();

    const signature = headers(req).get("stripe-signature");

    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      endpointSecret
    );

    if (event.type === "checkout.session.completed") {
      const sessionWithLineItems = await stripe.checkout.sessions.retrieve(
        event.data.object.id,
        {
          expand: ["line_items"],
        }
      );
      const lineItems = sessionWithLineItems.line_items;

      if (!lineItems) return res.status(500).send("Internal Server Error");

      try {
        // console.log("data", lineItems.data);
        // console.log("customer email", event.data.object.customer_details.email);
        const userId = event.data.object.success_url.split("=")[1];

        console.log("sucess url .... ", userId);

        let user_found = "";
        try {
          const response = await database.listDocuments(
            "66392c30001b34fefa14",
            "66392c62001ed202eeb8",
            [Query.equal("userId", [userId])]
          );

          if (response.documents?.length) {
            user_found = response.documents[0]
          }

          // Fetch updated records after creating a new one
          // fetchRecords();
        } catch (error) {
          console.error("Error document:", error);
        }

        console.log("user found ... ", user_found.$id);

        if (user_found) {
          if (
            process.env.NEXT_PUBLIC_OFFLINE_PRODUCT_ID == lineItems.data[0].price.id
          ) {
            try {
              const result = await database.updateDocument(
                "66392c30001b34fefa14",
                "66392c62001ed202eeb8",
                user_found.$id,
                { paid: "true" }
              );
            } catch (error) {
              console.error("Error creating document:", error);
            }
          } else if (
            process.env.NEXT_PUBLIC_ONLINE_PRODUCT_ID == lineItems.data[0].price.id
          ) {
            try {
              const result = await database.updateDocument(
                "66392c30001b34fefa14",
                "66392c62001ed202eeb8",
                user_found.$id,
                { paid2: "true" }
              );
            } catch (error) {
              console.error("Error creating document:", error);
            }
          }
        }
      } catch (error) {
        console.log("Handling when you're unable to save an order", error);
      }
    }

    return NextResponse.json({ result: event, ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: error.message,
        ok: false,
      },
      { status: 500 }
    );
  }
}
