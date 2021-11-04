// const os = require('os');
// const fs = require('fs');
// console.log("windows-version:",os.version());
// console.log("bit:",os.arch());
// fs.writeFileSync('hello.txt','I am coming from node.');
// fs.appendFileSync('hello.txt','\n More text.');
// const content = fs.readFileSync('hello.txt');
// console.log(content.toString());
// console.log('Running Node');
const express = require('express');
const { MongoClient } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;

const cors = require('cors');
require('dotenv').config();

const app = express()
const port = process.env.port || 5000;

//middleware
app.use(cors())
app.use(express.json())

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.gkh4r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run(){
  try{
    await client.connect;
    console.log('database connected.')
  }
  finally{
    //await client.close();
  }
}


app.get('/', (req, res) => {
    console.log(req);
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

/*
one time:
1.install nodemon globally
2.mongodb atlas user, access
3.Package.json -> start and start-dev
4.

*/