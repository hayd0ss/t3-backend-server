const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://T3-CRUD-UML:T3Visualisers@cluster0.4zfw9n9.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  if (err) throw err;
});

const collection = client.db("developer_db").collection("developerCollection");

module.exports = { collection, ObjectId }

