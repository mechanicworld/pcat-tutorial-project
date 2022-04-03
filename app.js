const express = require('express')
const path = require('path')

const app = express();

// const myLogger1 = (req,res,next) => {
//   console.log("MIddleware Log 1")
//   next();
// }

// const myLogger2 = (req,res,next) => {
//   console.log("MIddleware Log 2")
//   next();
// }
//MIDDLEWARES
app.use(express.static('public'))
// app.use(myLogger1);
// app.use(myLogger2);
const port = 3000;


app.get('/', ((req, res) => {
  res.sendFile(path.resolve(__dirname, 'temp/index.html'))
}))

app.get('/photo', ((req, res) => {

  const photo = {
    id:1,
    name:"Photo Name"
  }
  res.send(photo)
}))

app.listen(port, () => {
  console.log(`Server is running at port: ${port}`)
})

