const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//Initiate MongoDB and start server
app.listen(PORT, () => {
    mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/inventorydb', { useNewUrlParser: true }).then((response) => {
        console.log(`Connected to MongoDB and server started on PORT ${PORT}`);
    }).catch((err) => {
        console.log(err);
    })
});


const Schema = mongoose.Schema;
const inventorySchema = new Schema({
    name: String,
    description: String,
    inStock: Boolean,
    location: Number
});
const Item = mongoose.model('Item', inventorySchema);

app.get('/api/inventory', async (req, res, next) => {
    const items = await Item.find();
    return res.json(items);
});

app.post('/api/inventory', async (req, res, next) => {
    const item = new Item(req.body);
    item.inStock = true;
    
    await item.save();
    return res.json(item);
});

app.put('/api/inventory', async (req, res, next) => {
   try{
        const item = await Item.findOne({ _id: req.body._id });
        item.inStock = req.body.inStock;
        
        await item.save();
        res.send(item);
    } catch {
        res.status(404);
        res.send({ error: "Item does not exist" });
    }
});

app.delete('/api/inventory', async (req, res, next) => {
    // find item by id and delete
    await Item.findByIdAndDelete(req.body.id);                   

    return res.json({
        message: 'Item deleted successfully',
        success: true,
    });
});