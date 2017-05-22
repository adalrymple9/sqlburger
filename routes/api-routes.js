// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// grab the orm from the config
// (remember: connection.js -> orm.js -> route file)
//var orm = require("../config/orm.js");
var db = require("../models");
// Routes
// =============================================================
module.exports = function(app) {

    // GET route for getting all of the burgers
    app.get("/api/burgers", function(req, res) {
        db.Burger.findAll({}).then(function(results) {
            res.json(results);
        });
        //orm.getBurgers(function(results) {
        //  res.json(results);
        //});
    });

    // POST route for saving a new burger. We can create a burger using the data on req.body
    app.post("/api/burgers", function(req, res) {
        db.Burger.create({
            text: req.body.text,
            complete: req.body.complete
        }).then(function(result) {
            res.json(result);
        });
        //orm.addBurger(req.body, function(results) {
        //  res.json(results).status(200);
        //});
    });

    // DELETE route for deleting burgers. We can access the ID of the burger to delete in
    // req.params.id
    app.delete("/api/burgers/:id", function(req, res) {
        //orm.deleteBurger(req.params.id, function(results) {
        //  res.json(results).status(200);
        //});
        db.Burger.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(result) {
            res.json(result);
        });
    });

    // PUT route for updating burgers. We can access the updated burger in req.body
    app.put("/api/burgers", function(req, res) {
        //orm.editBurger(req.body, function(results) {
        //  res.json(results).status(200);
        //});
        db.Burger.update({
            complete: req.body.complete
        }, {
            where: {
                id: req.body.id
            }
        }).then(function(result) {
            res.json(result);
        });

    });
};
