import mongoose from 'mongoose';
const childSchema = new mongoose.Schema({ // using mongoose method to define schema for child
    id: Number,
    parentId: Number,
    sender: String,
    receiver: String,
    totalAmount: Number,
    paidAmount: Number,
});

const Child = mongoose.model('Child', childSchema); // To create a model based on the child schema

export default Child;
