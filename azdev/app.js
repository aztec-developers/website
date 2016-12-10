var express = require("express");
var app = express();
var router = express.Router();

app.use(router)
app.use("/public", express.static("public"));

router.all("/", function (req, res, next) {  

  res.send("<!DOCTYPE html>" +
            "<html>" +
            "<head>" +
                "<title>Aztec Developers</title>" +
                "<link rel=\"stylesheet\" type=\"text/css\" href=\"public/style.css\">" +
            "</head>" +
            "<body>" +
            "<p>Hello World</p>" +
            "</body>" +
            "</html>")
});

app.listen(3000, function () {
  console.log("Starting up app...");
});