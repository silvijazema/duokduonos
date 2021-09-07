import express from 'express' ;
const app = express();
import data from './data.js';

app.get('/api/products', (req, res) =>{
    res.send(data.products);
})

app.get('/', (req, res) => {
    res.send('Server is ready');
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});
