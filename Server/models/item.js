const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var ObjectId = require('mongoose').Types.ObjectId; 

const itemSchema = Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  kind: { type: String, enum: ["Request", "ForDelivery"], required: true },
  category: { type: Schema.Types.ObjectId, ref: "category", required: true },
  city: { type: String, require: true },
  username: { type: Schema.Types.ObjectId, ref: "user", required: true }
});

const itemsList = module.exports = mongoose.model("item", itemSchema);

module.exports.getAllItems = (callback) => itemsList.find().populate("category").populate("username").exec(callback);

module.exports.getItemsByUser = (user_id, callback) => {
  let query = {username: user_id};
  return ( itemsList.find(query).populate("category").populate("username").exec(callback) );
}


module.exports.getItemByCategory = (category, callback) => {
    //let query = {category: new ObjectId(category)};
    let query = {category: category};
    
    itemsList.find(query).count().exec(function (err, count) {

        var random = Math.floor(Math.random() * count);

        return ( itemsList.find(query).find().limit(-1).skip(random).exec(callback));

    });
}
  

module.exports.getItemsAmountByKind = () => {
    return itemsList.aggregate([
        {
            $group: {
                _id: '$kind',
                count: {$sum: 1}
            }
        }
    ]);
}


module.exports.getItemsAmountInEachCategory = () => {
    return itemsList.aggregate([
        {
            $group: {
                _id: '$category',
                count: {$sum: 1}
            }
        }
    ]);
}