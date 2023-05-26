import mongoose from 'mongoose';

const parentSchema = new mongoose.Schema({ // using mongoose method to define schema for parent
    id: Number,
    sender: String,
    receiver: String,
    totalAmount: Number,
    installmentIds: [],
});

const Parent = mongoose.model('Parent', parentSchema); // creating a model based on the parent schema

export default Parent;
