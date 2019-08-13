const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = Schema({
    sourceUser: { type: Schema.Types.ObjectId, ref: "user", required: true },
    destUser: { type: Schema.Types.ObjectId, ref: "user", required: true },
    title: { type: String, require: true },
    content: { type: String, required: true },
});

const messagesList = module.exports = mongoose.model("message", messageSchema);

module.exports.getMessagesByUsername = (username) => {
    return new Promise((resolve, reject) => {
        
        let query = { destUser: username };
        messagesList.find(query)
            .populate("sourceUser")
            .populate("destUser").exec((err, messages) => {
                if (err) {
                    reject(new Error(err));
                }
                else {
                    resolve(messages);
                }
            });
    });
};

module.exports.totalMessagesAmount = (username) => {
    return new Promise((resolve, reject) => {
        messagesList.getMessagesByUsername(username).then(messages => {
            resolve(messages.map(msg => 1).reduce((sum, currentMsg) => sum + currentMsg));
        }).catch(reject)
    })
} 

module.exports.getAllMessages = (callback) => {
    return (messagesList.find().populate("sourceUser").populate("destUser").exec(callback));
} 