import axios from "axios";

export default {
    getevent: function () {
        return axios.get("/api/searchevent");
    },
    searchevent: function (location) {
        return axios.post("/api/searchevent", { location });
    },
    savedEvent: function (id, userId) {
        return axios.post("/api/events/" + id, userId);
    }
    // saveevent: function (data) {
    //     return axios.post("/api/volunteer&event", data);
    // },
    // getUserInfo: function (id) {
    //     return axios.get("/api/" + id);
    // }
}