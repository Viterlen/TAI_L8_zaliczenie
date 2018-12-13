import mongose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
const postSchema = new mongose.Schema({
    title: {type: String},
    url: {type: Number},
    content: {type: String},
}, {
    collection: 'post'
});
postSchema.plugin(uniqueValidator);

const PostModel = mongose.model('product', postSchema );