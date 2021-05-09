const express = require("express");
const serve = express();
const PORT = process.env.PORT || 8080;

serve.get("/", (req, res) => {
    res.end('Node')
});

serve.listen(PORT, () => {
    console.log(`Server is running. ${PORT}`)
})