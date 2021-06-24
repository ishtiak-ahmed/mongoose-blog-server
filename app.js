const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const cors = require('cors')
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const authRouter = require('./routes/authRoutes');
const postRouter = require('./routes/postRoutes');
const commentRouter = require('./routes/commentRoutes');

app.use('/auth', authRouter);
app.use('/post', postRouter);
app.use('/comment', commentRouter);

app.get('/api/ping', (req, res) => {
    res.status(200).send('Server and all is well.')
})

const DB = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.xzynl.mongodb.net/retro-blog?retryWrites=true&w=majority`;

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(con => {
    console.log('DB connected succesfully')
}).catch(err => console.log("Error : ", err))

app.listen(3002, console.log('Server is running in port 3002.'))