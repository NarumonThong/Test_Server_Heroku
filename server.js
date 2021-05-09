const express = require("express");
const serve = express();
const PORT = process.env.PORT || 8080;

serve.get("/", (req, res) => {
    res.json({ result: "ok", data: [1,2,3,4,5]});
});

serve.listen(PORT, () => {
    console.log(`Server is running. ${PORT}`)
})