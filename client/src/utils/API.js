import axios from "axios";

export default {
    // getevent: function () {
    //     return axios.get("/api/searchevent");
    // },
    // searchevent: function (location) {
    //     return axios.post("/api/searchevent", { location });
    // },
    searchevent: function () {
        return axios.get("/api/events");
    },

    savedEvent: function (id, userId) {
        return axios.post("/api/events/" + id, userId);
    },
    
    getsavedEvent: function (id) {
        return axios.get("/api/userevents/" + id)
    },

    updateNumber: function (id, addone) {
        return axios.put("/api/events/" + id, addone);
    },
    seekerEventVolunteerList: function (id, UserId) {
        return axios.get("/api/seekerEvent/" + id + "/" +  UserId)
    }
}