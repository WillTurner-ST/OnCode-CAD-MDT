const CallsController = require("../controllers/calls.controller");

module.exports = (app) => {
    //create
  app.post("/api/calls", CallsController.createCalls);
    //read
  app.get("/api/calls", CallsController.getAllCalls);
  app.get("/api/calls/:id", CallsController.getOneCalls);
    //update
  app.put("/api/calls/edit/:id", CallsController.updateCalls);
    //delete
  app.delete("/api/calls/:id", CallsController.deleteCalls);
};