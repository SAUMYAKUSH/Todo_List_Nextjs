const { MongoClient, ObjectId } = require("mongodb");

async function deletetodo(req, res) {
  if (req.method === "PUT") {
    try {
      const { _id } = req.body;

      const client = await MongoClient.connect(
        "mongodb+srv://MayankTiwari:x3vyqTqhpWEGXcwR@cluster0.qg8qp18.mongodb.net/todos?retryWrites=true&w=majority"
      );

      const db = client.db();
      const todoCollection = db.collection("todos");

      const result = await todoCollection.updateOne(
        { _id: new ObjectId(_id) },
        { $set: { completed: true } }
      );

      client.close();

      res.status(201).json({ message: "Todo Deleted" });
    } catch (error) {
      console.error("Error deleting todo:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default deletetodo;
