const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const app = express();

const itemRoutes = require('./routes/item');

//no-sql db
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/mevn', {
    useMongoClient: true
}).then(() => console.log('db connected')).catch(err => console.log(err));













































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(cors()); //permite a la app 'hablar' con otro servidor
app.use(bodyParser.json());

//routes
app.use('/item', itemRoutes);



//static files (archivos que no cambian).
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
    console.log('server on port', app.get('port'));
});

