import express from "express";
const app = express();
import cors from 'cors';
import mongoose from "mongoose";
import Contact from "./models/model.js";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

mongoose.connect('mongodb+srv://mongodb200205:tKakEmQPy4JyRRVx@cluster0.u9hlpen.mongodb.net/into?retryWrites=true&w=majority');

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.post("/buyurtma", (req, res) => {
    const newContact = new Contact({
        name: req.body.name,
        optionn: req.body.optionn,
        number: req.body.number,
    });
    newContact.save();
  });
app.listen(5000, () => console.log('server has been 5000...'));
