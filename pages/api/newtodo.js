const { MongoClient } = require("mongodb");

async function newtodo(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://MayankTiwari:x3vyqTqhpWEGXcwR@cluster0.qg8qp18.mongodb.net/todos?retryWrites=true&w=majority"
    );

    const db = client.db();

    const todoCollection = db.collection("todos");

    const result = await todoCollection.insertOne(data);

    client.close();

    res.status(201).json({ message: "Todo Created" });
  }
}

export default newtodo;
