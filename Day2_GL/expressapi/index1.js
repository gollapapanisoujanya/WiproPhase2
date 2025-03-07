const express=require("express");
var app=express();
const port=4000;
var routes=require("./routes.js");
app.use("/api",routes);
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});