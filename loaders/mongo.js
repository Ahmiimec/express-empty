import { MongoClient } from 'mongodb';

const uri='mongodb+srv://ahmedUser:ahmedPass@cluster0.5a18h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const mongoDb=MongoClient.connect(uri,{useUnifiedTopology: true
  },)
  .then(client => {
    console.log('Connected to Database')
    const db = client.db('chatDB')
    const chatLogsCollection = db.collection('chatLogs')
    db.collection('chatLogs').insertOne({name: "Ahmed"})
  })
  .catch(error => console.error(error))

export default mongoDb;