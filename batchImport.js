const { MongoClient } = require("mongodb");

const {palettes } = require("./data/palettes")

require("dotenv").config("./");

const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
const x=0;

const batchImport = async () => {

const client = new MongoClient(MONGO_URI, options);

    try {
        await client.connect();
        const db = client.db("ColorPeak");
        console.log("connected");
        const insertImgs = await db.collection("palettes_saved").insertMany(palettes);
        console.log(insertImgs)
    
       } catch (err) {
        
         console.log(err.stack);
       } finally {

           client.close();
       }


}

batchImport();
