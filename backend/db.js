const mongoose = require('mongoose')
const mongoURI = 'mongodb+srv://yefrin200:123miumg@yefrincluster.n3re7rf.mongodb.net/' // Customer change url to your db you created in atlas
module.exports = function (callback) {
    mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
        
        if (err) console.log("---" + err)
        else {
            console.log("connected to mongo")
            const foodCollection = await mongoose.connection.db.collection("food_items");
            foodCollection.find({}).toArray(async function (err, data) {
                const categoryCollection = await mongoose.connection.db.collection("Categories");
                categoryCollection.find({}).toArray(async function (err, Catdata) {
                    callback(err, data, Catdata);

                })
            });
           
        }
    })
};
