import { MongoClient } from "mongodb";
// /api/new-meetup

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    console.log(data);

    const client = await MongoClient.connect(
      "mongodb+srv://udula01:udula@cluster0.sxirz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    );

    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data);
    res.status(201).json({ message: "Meetup inserted!" });
    console.log(result);
    client.close();
  }
}

export default handler;
