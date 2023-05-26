import mongoose from 'mongoose'
const connectDB = async () => {  // To establishing a connection to the MongoDB database
    try {
        await mongoose.connect("mongodb+srv://rizwan:rizwan123@cluster0.9qbwdri.mongodb.net/Codistan?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected!');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

export default connectDB;
