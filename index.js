 const express = require("express");
 const bodyParser = require("body-parser");
 const exphbs = require("express-handlebars");
 const path = require("path");

 const app = express();

 app.engine("handlebars", exphbs());
 app.set("view engine", "handlebars");

 app.use("/public", express.static(path.join(__dirname,"public")));

 app.use(bodyParser.urlencoded({ extended: false}));
 app.use(bodyParser.json());


 app.get('/', (req, res)=> {
     res.render('contact',{layout:false});
 });

 app.post("/send", (req,res) => {
     console.log(req.body)
 })


 const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));
