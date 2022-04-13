const express = require('express');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const methodOverride = require('method-override');

const ejs = require('ejs');
const photoController = require('./controllers/photoController')
const pageController = require('./controllers/pageController')

const app = express();

// CONNECT DB
mongoose.connect('mongodb+srv://mechanicworld:FmIYBh4W3yoqluiJ@cluster0.jurl3.mongodb.net/pcat-tutorial?retryWrites=true&w=majority')
  .then(() => {
    console.log("DB-Connected")
})
  .catch((err) => {
    console.log(err)
  }) ;

// {
//   useNewUrlParser:true,
//   useUnifiedTopology:true,
// }

// TEMPLATE ENGINE
app.set('view engine', 'ejs');

// MIDDLEWARES
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());
app.use(methodOverride('_method', {
  methods: ['POST', 'GET']
}));
// ROUTES


app.get('/', photoController.getAllPhotos);
app.get('/photos/:id', photoController.getPhoto);
app.post('/photos', photoController.createPhoto);
app.put('/photos/edit/:id', photoController.updatePhoto);
app.delete('/photos/:id', photoController.deletePhoto)


app.get('/about', pageController.getAboutPage);

app.get('/add', pageController.getAddPage);

app.get('/photos/edit/:id', pageController.getEditPage);




const port = process.env.PORT||5000;
app.listen(port, () => {
  console.log(`Server is running at port: ${port}`);
});
