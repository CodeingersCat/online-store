import mongoose from 'mongoose';

const dbConnect = async () => {
    try{
        const conn = await mongoose.connect(process.env.DB, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });

        console.log("\x1b[36mDB connected: " +conn.connection.host);
    }
    catch(error){
        console.log("\x1b[41m"+`ERROR : ${error.message}\n  \x1b[40m`);
        dbConnect();
    }
}

export default dbConnect;