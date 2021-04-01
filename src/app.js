
const express = require('express');
const app = express();
const path = require("path");
const hbs = require('hbs');
 const port = process.env.PORT || 3000;






           // public static path
// console.log(path.join(__dirname,"public"));
const static_path = path.join(__dirname,"../public");
// partials file set
const template_path = path.join(__dirname,"../templates/views");
// partials flile set
const partials_path = path.join(__dirname,"../templates/partials");


// set hbs
app.set('view engine', 'hbs');
// partials file set
app.set('views', template_path)

hbs.registerPartials(partials_path);


             // builtin middleware 
 app.use(express.static(static_path));


 
//  routing
app.get("/", (req,res)=>{
    res.render("index");
})

app.get("/about", (req,res)=>{
    res.render("about");
})


app.get("/weather", (req,res)=>{
    res.render("weather");
})

app.get("*",(req,res)=>{
    res.render("404error",{
        errorMsg:'Opps! Page Not Found'
    });
})
app.listen(port,()=>{
    console.log(`listing the port at  ${port}`);
})



