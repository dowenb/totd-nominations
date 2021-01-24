const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

global.nomination = require('./api/models/nominationModel');
const routes = require('./api/routes/nominationRoutes');

mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);
mongoose.connect(
    'mongodb://root:example@localhost:27017/tester-of-the-day?authSource=admin&readPreference=primary&ssl=false',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).catch((error) => {
    console.error(error);
    process.exit(1);
});

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);
app.listen(port);

app.use((req, res) => {
    res.status(404).send({ url: `${req.originalUrl} not found` });
});

console.log(`Server started on port ${port}`);