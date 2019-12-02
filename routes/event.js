const db = require('../models');
var sequelize = require("sequelize");

module.exports = function (app) {
    // join Events, Event_User, and User table together
    app.get("/api/userevents/:id", (req, res) => {
        db.sequelize.query(
            // eu.EventID, u.first_name, u.last_name,
            `Select users.first_name, events.* from events
            left join event_users on event_users.EventID = events.id
            left join users on event_users.UserID = users.id WHERE users.id = ?`,
            {
                replacements: [req.params.id], type: sequelize.QueryTypes.SELECT
            }
        ).then((result) => {
            console.table(result);
            res.json(result);
        })
    })

    //  search Events
    app.get("/api/events", (req, res) => {
        db.Event.findAll({}).then(function (results) {
            res.json(results);
        })
    })

    //  saved events to Event_User Table
    app.post("/api/events/:id", (req, res) => {
        console.log(req.params.id);
        console.log(req.body);
        let save = req.body;
        db.Event_User.create({
            EventID: req.params.id,
            UserID: save.UserId
        }).then(function (save) {
            res.json(save)
        })
    })

    // update events's required people
    // app.put("/api/events/:id", (req, res) => {
    //     console.log(req.params.id);
    //     console.log(req.body);
    //     db.Event.increment(
    //         { going: 1 },
    //         {
    //             where: { id: req.params.id }
    //         }
    //     ).then(function (updated) {
    //         res.json(updated)
    //     })
    // })

    app.get("/api/seekerEvent/:id/:seekerID", (req, res) => {
        // console.log(req.params.id);
        console.log(req.body);
        let save = req.body.UserId;
        db.sequelize.query(
            `select events.title, users.first_name, users.last_name, users.email from events
            left join event_users on event_users.EventID = events.id
            left join users on event_users.UserID = users.id where events.id = ? and events.UserId = ?`,
            {
                replacements: [req.params.id , req.params.seekerID],
                type: sequelize.QueryTypes.SELECT
            }
        ).then((result) => {
            console.table(result);
            res.json(result);
        })
    })
};