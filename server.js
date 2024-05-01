const express = require("express");
const app = express();

const { quotes } = require("./data");
const { getRandomElement } = require("./utils");

const PORT = process.env.PORT || 4001;

app.use(express.static("public"));

/* template:
app.get('',()=>{

});
*/


app.get('/api/quotes/person/:person', (req, res)=>{
    const person = req.params.person;
    console.log("person is",person);
    const quote = quotes.filter((item)=>item.person===person);
    if(quote){
        res.send(quote);
    }else{
        res.status(404).send();
    }
    });


//fetch all quotes
app.get('/api/quotes/all',(req, res)=>{
    console.log("sending all quotes")
    res.send(quotes);
});

//fetch random quote
app.get('/api/quotes/random',(req, res)=>{
    const randomQuote = getRandomElement(quotes);
    console.log("fetching random quote")
    res.send(randomQuote);
});


app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
