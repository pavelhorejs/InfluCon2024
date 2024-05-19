import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import * as appwrite from "appwrite";
import { headers } from "next/headers";

const endpointSecret = process.env.STRIPE_TEST_WEBHOOK;

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

import { Account, Client, Databases, ID, Query } from "appwrite";

const client = new Client();

client
  .setEndpoint(process.env.APPWRITE_ENDPOINT)
  .setProject(process.env.APPWRITE_PROJECT_ID);

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

        const userId = event.data.object.success_url.split("=")[1];

        console.log("sucess url .... ", userId);

        let user_found = "";
        try {
          const response = await database.listDocuments(
            process.env.APPWRITE_DATABSE_ID,
            process.env.APPWRITE_USERS_DATABASE_ID,
            [Query.equal("userId", [userId])]
          );

          if (response.documents?.length) {
            user_found = response.documents[0]
          }

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
                process.env.APPWRITE_DATABSE_ID,
                process.env.APPWRITE_USERS_DATABASE_ID,
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
                process.env.APPWRITE_DATABSE_ID,
                process.env.APPWRITE_USERS_DATABASE_ID,
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
