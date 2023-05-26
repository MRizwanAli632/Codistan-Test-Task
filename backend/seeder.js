import parent from './data/parents.js'
import child from './data/child.js'
import Parent from './models/Parent.js'
import Child from './models/Child.js'
import connectDB from './config/database.js'

connectDB();

// Seeder file used to populate the database 
const importData = async () => {

    try {
        await Parent.deleteMany()
        await Child.deleteMany()

        const createdParent = await Parent.insertMany(parent);
        const createdChild = await Child.insertMany(child);
        const parentUpdatePromises = createdChild.map((child) => {
            return Parent.updateOne(
                { id: child.parentId },
                { $push: { installmentIds: { paidAmount: child.paidAmount } } }
            );
        });

        await Promise.all(parentUpdatePromises);
        console.log("Data has been Inserted")
        process.exit()
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}
// destroy data from database
const destroyData = async () => {

    try {
        await Parent.deleteMany()
        await Child.deleteMany()
        console.log("Data has been Destroyed")
        process.exit()
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}
if (process.argv[2] === '-d') {
    destroyData();
}
else {
    importData();
}