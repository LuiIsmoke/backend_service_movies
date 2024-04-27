const express = require("express")

const app = express();

// const logger = require(`Morgan`);

const data = require("./movies.json");

const port = 4000;

app.use(express.json());

app.get("/", (req, res) => {
    // console.log(`resquest from ${req.url}`);
    res.send("Server running");
});

app.get("/movies", (req, res) => {
    res.status(200).json(data);
});

app.get("/movies/:id", (req, res) => {
    const id_movie = parseInt(req.params.id);
    const movie = data.find(m => m.id === id_movie);
    res.status(200).json(movie);
});

app.put("/movies/:id", (req, res) => {
    const id = parseInt(req.params.id);
    let movie = data.find(m => m.id === id);
    (movie.title = req.body.title), (movie.release = req.body.release);
    res.status(200).json(movie);
});

app.delete("/movies/:id", (req, res) => {
    const id = parseInt(req.params.id);
    let movie = data.find(m => m.id === id);
    data.splice(data.indexOf(movie), 1);
    res.status(200).json(movie);
});

app.post("/movies", (req, res) => {
    data.push(req.body);
    res.status(200).json(data);
});


app.listen(port, () => 
 console.log(`Express server listening at http://localhost:${port}`)
 );