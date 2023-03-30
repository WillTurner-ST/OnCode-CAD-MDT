const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/CAD", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("The eagle has landed"))
  .catch((err) => console.log("Mayday Mayday we've crashed!", err));