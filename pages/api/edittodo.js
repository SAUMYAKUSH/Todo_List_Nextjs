const { MongoClient, ObjectId } = require("mongodb");

async function edittodo(req, res) {
  if (req.method === "PUT") {
    const { _id, data } = req.body;

    if (!ObjectId.isValid(_id)) {
      return res.status(400).json({ message: "Invalid ObjectId format" });
    }

    const client = await MongoClient.connect(
      "mongodb+srv://MayankTiwari:x3vyqTqhpWEGXcwR@cluster0.qg8qp18.mongodb.net/todos?retryWrites=true&w=majority"
    );

    const db = client.db();

    const todoCollection = db.collection("todos");

    const result = await todoCollection.updateOne(
      { _id: new ObjectId(_id) },
      { $set: { todo: data } }
    );

    client.close();

    res.status(201).json({ message: "Todo Updated" });
  }
}

export default edittodo;
