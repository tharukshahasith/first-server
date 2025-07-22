import express from 'express';

const app = express();
const port = process.env.PORT || 3000;


app.get("/", (req, res) => {
    res.send("Hello from Hitesh ant tea");
})

app.listen(port, () => {
    console.log(`Sever is running at port: ${port}`);
})
