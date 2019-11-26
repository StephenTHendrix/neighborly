const cheerio = require("cheerio");
const axios = require("axios");
const db = require('../models');
var sequelize = require("sequelize");

module.exports = function (app) {
    app.get("/api/userevents/:id", (req, res) => {
        db.sequelize.query(
            `Select t1.EventID, t3.first_name, t3.last_name, t2.* from event_users as t1
            left join searchevents as t2 on t2.id = t1.EventID
            left join users as t3 on t1.UserID = ?`,
            {
                replacements: [req.params.id], type: sequelize.QueryTypes.SELECT
            }
        ).then((result) => {
            console.table(res);
            res.json(result);
        })
    })

    //  search Events
    app.get("/api/events", (req,res) => {
        db.Event.findAll({}).then(function(results){
            res.json(results);
        })
    })
    

    //  saved events API
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
};

// // search events API
    // app.get("/api/searchevent", (req, res) => {
    //     // let location = req.body.location;
    //     db.SearchEvent.findAll({
    //         order: [
    //             ["id", "ASC"],
    //         ]
    //     }).then(function (results) {
    //         res.json(results);
    //     });
    // });

    // app.post("/api/searchevent", (req, res) => {
    //     let location = req.body.location;
    //     var i = 1;
    //     while (i < 50) {
    //         // console.log(location);
    //         axios.get("https://www.volunteermatch.org/search?l=" + location + "&s=" + i).then(function (response) {
    //             let $ = cheerio.load(response.data);
    //             $("div.searchitem").each(function (i, element) {
    //                 let title = $(element).find("h3").find("a").text();
    //                 let link = $(element).find("h3").find("a").attr("href");
    //                 let organization = $(element).find(".orgid").find("a.psr_link").text();
    //                 let street = $(element).find(".rwd_display").find(".opp_address").find("span.street-address").text();
    //                 let city = $(element).find(".rwd_display").find(".opp_address").find(".locality").text().replace(/,/g, "").trim();
    //                 let state = $(element).find(".rwd_display").find(".opp_address").find(".region").text();
    //                 let zipCode = $(element).find(".rwd_display").find(".opp_address").find(".postal-code").text();

    //                 fulllink = "https://www.volunteermatch.org" + link;
    //                 axios.get(fulllink).then((response) => {
    //                     let $ = cheerio.load(response.data);
    //                     $("div.opp-dtl").each(function (i, element) {
    //                         let description = $(element).find(".opp-dtl__summary").find("p").text().trim();
    //                         let date = $(element).find(".date-start").text().trim();
    //                         let time = $(element).find(".time-start").text().trim();
    //                         let flexible = $(element).find(".logistics__section--when").find("p.para").text().trim();
    //                         let smalldescription = description.substring(0, 100);
    //                         smalldescription = smalldescription + "...";
    //                         db.SearchEvent.findOrCreate({
    //                             where: {
    //                                 title: title,
    //                             },
    //                             defaults: {
    //                                 title: title,
    //                                 link: fulllink,
    //                                 organization: organization,
    //                                 street: street,
    //                                 city: city,
    //                                 state: state,
    //                                 zip: zipCode,
    //                                 smalldescription: smalldescription,
    //                                 description: description,
    //                                 date: date,
    //                                 time: time,
    //                                 flexible: flexible
    //                             }
    //                         });
    //                     });
    //                 });
    //             });
    //         })
    //         i = i + 10;
    //     };
    // });