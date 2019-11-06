module.exports = function (app) {
    
    var administrators = require("..data/administrators")
    app.get("/api/administrators", function (req, res) {
        res.json(administrators);
    });
}

app.post("*", function (req, res) {
    var adminMatch = req.body
    res.json(adminMatch);
});