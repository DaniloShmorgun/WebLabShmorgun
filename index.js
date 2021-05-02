const express = require("express")
const path = require("path")
const PORT = 3000

const app = express()
const jsonParser = express.json();

app.use(express.static(path.resolve(__dirname, 'public')))
app.use(express.urlencoded({extended: false}))

app.post("/form.html", jsonParser, (req, res) =>{
  if(!req.body) return res.sendStatus(400);
  res.json(req.body);
});

app.get("/form.html",function(request, response){
    response.sendFile(__dirname + "/public/form.html");
});
app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
})
