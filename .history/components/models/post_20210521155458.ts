import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
    title: {type: String, required: [true, 'Please add a title']},
    body: {type: String, required: [true, 'Type something...']}


}

module.exports = mongoose.models.Post || 