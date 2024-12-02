import Cartdata from "@/models/Cartdata";
import db from "@/utils/db";
import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  // const data=await request.json()
  // await db.connect()
  // res.status(200).json({ name: "John Doe" });
  // const client = await clientPromise;
  // await db.connect()
  // // const db = client.db("nextjs-mongodb-demo");
  switch (req.method) {
    case "POST":
      console.log("req",req.body)
      const {items,totalPrice, order_date}=await req.body
      // let bodyObject = JSON.parse(req.body);
      await db.connect()
      await Cartdata.create({items,totalPrice, order_date})
      res.json("data inserted successfully")
      // let myPost = await db.collection("cart").insertOne(bodyObject);
      // res.json(myPost.ops[0]);
      break;
    // case "GET":
    //   const allPosts = await db.collection("cart").find({}).toArray();
    //   res.json({ status: 200, data: allPosts });
    //   break;
  }


//   if (req.method === "POST") {
//     const { data } = req.body;
//     console.log(data)

//     const client = new MongoClient(process.env.DB_URI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     });

//     try {
//         await client.connect();
//         const database = client.db("ecommerce_nextjs");
//         const collection = database.collection("carts");
//         await collection.insertOne({ data });
//         res.status(201).json({ message: "Data saved successfully!" });
//     } catch (error) {
//         res.status(500).json({ message: "Something went wrong!" });
//     } finally {
//         await client.close();
//     }
// } else {
//     res.status(405).json({ message: "Method not allowed!" });
// }
}