const express = require('express');
const router = require("./src/route/user.route");
const app = express();
const port = 4005;


app.use(express.json());
app.use(router);


app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
}) 