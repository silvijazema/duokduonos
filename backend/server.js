import express from 'express' ;
import mongoose from 'mongoose';
import data from './data.js';
import userRouter from './routers/userRouter.js';
import dotenv from 'dotenv';
import User from './models/userModel.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose.connect('mongodb://localhost/duokduonos', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
   // useCreateIndex: true,
})

async function populateDatabaseWithData() {
    for(let i = 0; i < data.users.length; i += 1) {
        const user = data.users[i];
        const userExists = await User.findOne({email: user.email});
        if(!userExists) {
            await User.insertMany([user])
        }
    }
}

populateDatabaseWithData()

app.get('/api/products/:id', (req, res) => {
    const product = data.products.find( x => x._id === req.params.id);
    if(product){
        res.send(product);
    } else {
        res.status(404).send({message:'Product not Found'});
    }
});

app.get('/api/products', (req, res) =>{
    res.send(data.products);
})
 
app.use('/api/users', userRouter);

app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});
