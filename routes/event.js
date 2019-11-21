const cheerio = require("cheerio");
const axios = require("axios");

const db = require('../models');
module.exports = function (app) {
    app.get("/volunteer/event", (req, res) => {
        db.Event.findAll({}).then(function (results) {
            // results are available to us inside the .then
            res.json(results);
        });
    });
    app.post("/volunteer", (req, res) => {
        let location = req.body.location;
        console.log(location);

        axios.get("https://www.volunteermatch.org/search?l=" + location).then(function (response) {
            let $ = cheerio.load(response.data);
            $("div.searchitem").each(function (i, element) {
                let title = $(element).find("h3").find("a").text();
                let link = $(element).find("h3").find("a").attr("href");
                let organization = $(element).find(".orgid").find("a.psr_link").text();
                let street = $(element).find(".rwd_display").find(".opp_address").find("span.street-address").text();
                let city = $(element).find(".rwd_display").find(".opp_address").find(".locality").text();
                let state = $(element).find(".rwd_display").find(".opp_address").find(".region").text();
                let zipCode = $(element).find(".rwd_display").find(".opp_address").find(".postal-code").text();
                let smalldescription = $(element).find(".searchitem_desc ").text().replace(/\r?\n|\r/g, " ").trim();
                fulllink = "https://www.volunteermatch.org" + link;
                axios.get(fulllink).then((response) => {
                    let $ = cheerio.load(response.data);
                    $("div.opp-dtl").each(function (i, element) {
                        let description = $(element).find(".opp-dtl__summary").find("p").text().trim();
                        let date = $(element).find(".date-start").text().trim();
                        let time = $(element).find(".time-start").text().trim();
                        let flexible = $(element).find(".logistics__section--when").find("p.para").text().trim();
                        // console.log(description);
                        db.Event.create({
                            title: title,
                            link: fulllink,
                            organization: organization,
                            street: street,
                            city: city,
                            state: state,
                            zip: zipCode,
                            smalldescription: smalldescription,
                            description: description,
                            date: date,
                            time: time,
                            flexible: flexible
                        });
                    });
                });
            });
        })
    });
};