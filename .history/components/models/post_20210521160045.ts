import mongoose from 'mongoose';


const PostSchema = new mongoose.Schema({
    title: {type: String, required: [true, 'Please add a title']},
    body: {type: String, required: [true, 'Type something...']},
    category: {type: String},
    tags: {type: Array},
    user: {type: {
        name: String,
        author: String
    }},
    date: {type: String},
})

module.exports = mongoose.models.Post || mongoose.model('Post', PostSchema);