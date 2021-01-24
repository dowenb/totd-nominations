const mongoose = require('mongoose');

const { Schema } = mongoose;

const nominationSchema = new Schema(
    {
        name: {
            type: String,
            required: 'Name cannot be blank'
        },
        note: {
            type: String,
            required: 'Note cannot be blank'
        },
        twitter: {
            type: String
        },
        linkedin: {
            type: String
        },
        weblinks: {
            type: String
        }
    },
    { collection: 'nomination' }
);

module.exports = mongoose.model('nomination', nominationSchema);