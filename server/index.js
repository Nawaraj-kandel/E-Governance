const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const adminRouter = require('./routes/adminRoutes');
const userRouter = require('./routes/userRoutes');
const driverRouter = require('./routes/driverRoutes');
const binRouter = require('./routes/binRoutes');

dotenv.config();

const main = async()=>{
    try{
        await mongoose.connect(process.env.DATABASE_URL);
        console.log("Database connected successfully");
    }
    catch(error){
        console.log("Database is not connected");
    }
}
main();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use('/admin', adminRouter);
app.use('/user', userRouter);
app.use("/driver", driverRouter);
app.use("/bin", binRouter);


app.listen(3000, () => console.log('Server running on port 3000'));